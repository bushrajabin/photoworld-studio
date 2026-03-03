
function Portrait() {

  const images = [
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471744/p25_mymdcu.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471742/p19_mhsur0.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471741/p26_g1mdfh.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471736/p24_kviuct.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471734/p20_i0z9z9.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471713/p23_rbfala.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471712/p15_nknf2r.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471712/p22_c3yivg.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471643/p7_rq7jue.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471643/p11_mwum2z.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471639/p9_y8rshj.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471643/p8_i9cuny.jpg",
  ];

  return (
    <section className="portrait-section">
      <h2 className="portrait-title">PORTRAIT SHOOT</h2>

      <div className="portrait-grid">
        {images.map((img, index) => (
          <div key={index} className="portrait-card">
            <img src={img} alt="Portrait" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portrait;