import { useEffect, useState } from "react";
import { supabase } from "./supabase";

// Ek category ki saari photos/videos (nayi pehle) laata hai.
export function useMedia(category) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!supabase) {
        setError("Gallery abhi set up nahi hui hai.");
        setLoading(false);
        return;
      }
      const { data, error: err } = await supabase
        .from("media")
        .select("id, url, media_type, created_at")
        .eq("category", category)
        .order("created_at", { ascending: false });

      if (cancelled) return;
      if (err) setError("Photos load nahi ho paayi. Thodi der baad try karein.");
      else setItems(data || []);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [category]);

  return { items, loading, error };
}
