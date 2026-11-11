import { useMedia } from "../../lib/useMedia";
import { optimizeUrl } from "../../lib/config";

function AlbumShoot() {
  const { items, loading, error } = useMedia("album");

  return (
    <section className="album-section">
      <h2 className="album-title">ALBUM SHOOT</h2>

      {loading && <p style={{ color: "#aaa" }}>Loading...</p>}
      {error && <p style={{ color: "#aaa" }}>{error}</p>}

      <div className="album-full">
        {items.map((item) => (
          <div key={item.id} className="album-full-card">
            <img src={optimizeUrl(item.url)} alt="Album" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlbumShoot;
