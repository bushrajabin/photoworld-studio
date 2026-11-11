import { useMedia } from "../../lib/useMedia";
import { optimizeUrl } from "../../lib/config";

function Portrait() {
  const { items, loading, error } = useMedia("portrait");

  return (
    <section className="portrait-section">
      <h2 className="portrait-title">PORTRAIT SHOOT</h2>

      {loading && <p style={{ color: "#aaa" }}>Loading...</p>}
      {error && <p style={{ color: "#aaa" }}>{error}</p>}

      <div className="portrait-grid">
        {items.map((item) => (
          <div key={item.id} className="portrait-card">
            <img src={optimizeUrl(item.url)} alt="Portrait" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portrait;
