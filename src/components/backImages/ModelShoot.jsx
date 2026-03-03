
function ModelShoot() {

  const images = [
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519322/m4_pigqbh.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519322/m9_i2eltq.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519320/m8_ivyn9p.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m6_opx8rd.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m2_snnl74.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m5_fhk9yr.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519319/m3_q0sphw.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519318/m7_p5w0fx.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772519317/m1_sn5yk6.jpg",
  ];

  return (
    <section className="model-section">
      <h2 className="model-title">MAGAZINE SHOOT</h2>

      <div className="model-grid">
        {images.map((img, index) => (
          <div key={index} className="model-card">
            <img src={img} alt="Magazine Shoot" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModelShoot;