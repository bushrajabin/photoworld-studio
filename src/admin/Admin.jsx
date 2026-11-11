import { useCallback, useEffect, useRef, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import {
  CATEGORIES,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  optimizeUrl,
} from "../lib/config";
import "./admin.css";

const MAX_IMAGE_MB = 10; // Cloudinary free plan limit
const MAX_VIDEO_MB = 100;

/* ---------- Cloudinary upload (progress ke saath) ---------- */
function uploadToCloudinary(file, resourceType, onProgress) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`
    );
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && res.secure_url) {
          resolve(res.secure_url);
        } else {
          reject(new Error(res?.error?.message || "Upload fail ho gaya"));
        }
      } catch {
        reject(new Error("Upload fail ho gaya"));
      }
    };
    xhr.onerror = () => reject(new Error("Internet connection check karein"));
    xhr.send(form);
  });
}

/* ---------- Login ---------- */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error: err } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (err) setError("Email ya password galat hai.");
    setBusy(false);
  }

  return (
    <div className="admin-login-wrap">
      <form className="admin-login" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <p>Photoworld Studio</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        {error && <div className="admin-error">{error}</div>}
        <button type="submit" disabled={busy}>
          {busy ? "Login ho raha hai..." : "Login"}
        </button>
      </form>
    </div>
  );
}

/* ---------- Panel ---------- */
function Panel({ onLogout }) {
  const [category, setCategory] = useState(CATEGORIES[0].slug);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploads, setUploads] = useState([]); // {id, name, progress, status, error}
  const [dragging, setDragging] = useState(false);
  const [notice, setNotice] = useState("");
  const inputRef = useRef(null);

  const current = CATEGORIES.find((c) => c.slug === category);
  const isVideo = current.type === "video";

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("media")
      .select("id, url, media_type, created_at")
      .eq("category", category)
      .order("created_at", { ascending: false });
    if (error) setNotice("Photos load nahi ho paayi: " + error.message);
    else setItems(data || []);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    setUploads([]);
    setNotice("");
    load();
  }, [load]);

  function patchUpload(id, patch) {
    setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList || []);
    if (!files.length) return;
    setNotice("");

    const expected = isVideo ? "video/" : "image/";
    const limitMb = isVideo ? MAX_VIDEO_MB : MAX_IMAGE_MB;

    const queue = files.map((file, i) => ({
      id: `${Date.now()}-${i}`,
      file,
      name: file.name,
      progress: 0,
      status: "waiting",
      error: "",
    }));
    setUploads(queue.map(({ file: _f, ...rest }) => rest));

    const uploadedRows = [];
    for (const q of queue) {
      if (!q.file.type.startsWith(expected)) {
        patchUpload(q.id, {
          status: "error",
          error: isVideo ? "Sirf video file chalegi" : "Sirf photo chalegi",
        });
        continue;
      }
      if (q.file.size > limitMb * 1024 * 1024) {
        patchUpload(q.id, {
          status: "error",
          error: `File ${limitMb}MB se badi hai`,
        });
        continue;
      }
      try {
        patchUpload(q.id, { status: "uploading" });
        const url = await uploadToCloudinary(
          q.file,
          isVideo ? "video" : "image",
          (p) => patchUpload(q.id, { progress: p })
        );
        uploadedRows.push({
          category,
          media_type: isVideo ? "video" : "image",
          url,
        });
        patchUpload(q.id, { status: "done", progress: 100 });
      } catch (err) {
        patchUpload(q.id, { status: "error", error: err.message });
      }
    }

    if (uploadedRows.length) {
      const { error } = await supabase.from("media").insert(uploadedRows);
      if (error) {
        setNotice(
          "Upload hua par save nahi ho paya: " +
            error.message +
            " (dobara login karke try karein)"
        );
      } else {
        setNotice(`${uploadedRows.length} file add ho gayi ✔`);
        await load();
      }
    }
    if (inputRef.current) inputRef.current.value = "";
  }

  async function handleDelete(item) {
    if (!window.confirm("Ye file website se hata dein?")) return;
    const { data, error } = await supabase
      .from("media")
      .delete()
      .eq("id", item.id)
      .select();
    if (error || !data?.length) {
      setNotice("Delete nahi ho paya. Dobara login karke try karein.");
      return;
    }
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  }

  const busy = uploads.some((u) => u.status === "uploading" || u.status === "waiting");

  return (
    <div className="admin-page">
      <header className="admin-top">
        <h1>Photoworld Studio – Admin</h1>
        <div className="admin-top-actions">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Website dekhein
          </a>
          <button onClick={onLogout}>Logout</button>
        </div>
      </header>

      <nav className="admin-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            className={c.slug === category ? "active" : ""}
            onClick={() => setCategory(c.slug)}
            disabled={busy}
          >
            {c.label}
          </button>
        ))}
      </nav>

      <section className="admin-section">
        <h2>
          {current.label} mein {isVideo ? "video" : "photos"} jodein
        </h2>

        <div
          className={"admin-drop" + (dragging ? " dragging" : "")}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            if (!busy) handleFiles(e.dataTransfer.files);
          }}
          onClick={() => !busy && inputRef.current?.click()}
        >
          <p>
            {isVideo ? "Videos" : "Photos"} yahan kheench kar chhodein
            <br />
            <span>ya click karke chunein (ek saath kai files)</span>
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={isVideo ? "video/*" : "image/*"}
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {uploads.length > 0 && (
          <ul className="admin-uploads">
            {uploads.map((u) => (
              <li key={u.id}>
                <span className="name">{u.name}</span>
                {u.status === "error" ? (
                  <span className="err">{u.error}</span>
                ) : (
                  <span className="bar">
                    <i style={{ width: `${u.progress}%` }} />
                  </span>
                )}
                <span className="state">
                  {u.status === "done" ? "✔" : u.status === "error" ? "✖" : `${u.progress}%`}
                </span>
              </li>
            ))}
          </ul>
        )}

        {notice && <div className="admin-notice">{notice}</div>}
      </section>

      <section className="admin-section">
        <h2>
          Abhi website par ({items.length})
        </h2>
        {loading ? (
          <p className="admin-muted">Load ho raha hai...</p>
        ) : items.length === 0 ? (
          <p className="admin-muted">Is category mein abhi kuch nahi hai.</p>
        ) : (
          <div className="admin-grid">
            {items.map((item) => (
              <div className="admin-item" key={item.id}>
                {item.media_type === "video" ? (
                  <video src={optimizeUrl(item.url)} muted preload="metadata" />
                ) : (
                  <img src={optimizeUrl(item.url)} alt="" loading="lazy" />
                )}
                <button onClick={() => handleDelete(item)} disabled={busy}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Admin() {
  const [session, setSession] = useState(undefined); // undefined = check ho raha hai

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) =>
      setSession(s)
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) {
    return (
      <div className="admin-login-wrap">
        <div className="admin-login">
          <h1>Setup baaki hai</h1>
          <p>
            .env mein VITE_SUPABASE_URL aur VITE_SUPABASE_ANON_KEY daalein
            (README dekhein).
          </p>
        </div>
      </div>
    );
  }

  if (session === undefined) return <div className="admin-login-wrap"><p className="admin-muted">Load ho raha hai...</p></div>;
  if (!session) return <Login />;
  return <Panel onLogout={() => supabase.auth.signOut()} />;
}
