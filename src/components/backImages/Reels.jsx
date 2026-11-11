import { useMedia } from "../../lib/useMedia";
import { optimizeUrl } from "../../lib/config";

function Reels() {
  const { items, loading, error } = useMedia("reels");

  return (
    <section className="reels-section">
      <h2 className="reels-title">REELS SHOOT</h2>

      {loading && <p style={{ color: "#aaa" }}>Loading...</p>}
      {error && <p style={{ color: "#aaa" }}>{error}</p>}

      <div className="reels-grid">
        {items.map((item) => (
          <div key={item.id} className="reels-card">
            <video
              src={optimizeUrl(item.url)}
              muted
              loop
              controls
              preload="metadata"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;
