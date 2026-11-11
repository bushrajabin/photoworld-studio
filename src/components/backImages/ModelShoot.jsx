import { useMedia } from "../../lib/useMedia";
import { optimizeUrl } from "../../lib/config";

function ModelShoot() {
  const { items, loading, error } = useMedia("model");

  return (
    <section className="model-section">
      <h2 className="model-title">MAGAZINE SHOOT</h2>

      {loading && <p style={{ color: "#aaa" }}>Loading...</p>}
      {error && <p style={{ color: "#aaa" }}>{error}</p>}

      <div className="model-grid">
        {items.map((item) => (
          <div key={item.id} className="model-card">
            <img src={optimizeUrl(item.url)} alt="Magazine Shoot" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModelShoot;
