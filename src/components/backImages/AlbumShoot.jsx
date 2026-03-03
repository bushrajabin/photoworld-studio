
function AlbumShoot() {

  const images = [
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520406/a5_hdidhp.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520405/a7_ji45sl.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a6_r9dmls.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a2_psc10v.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a4_jhhzso.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a1_xazopo.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520403/a3_oeqkps.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520498/a12_sosddc.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772520500/a11_py6dnf.jpg",
  ];

  return (
    <section className="album-section">
      <h2 className="album-title">ALBUM SHOOT</h2>

      <div className="album-full">
        {images.map((img, index) => (
          <div key={index} className="album-full-card">
            <img src={img} alt="Album" />
          </div>
        ))}
      </div>

    </section>
  );
}

export default AlbumShoot;