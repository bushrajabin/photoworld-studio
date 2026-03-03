
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
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471645/p6_xlqwes.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471653/p5_u1tqex.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471665/p13_ufbwhg.jpg",
    "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471673/p12_rtbdp8.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471679/p16_r1db5r.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471689/p21_r3bs3t.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525807/pic4_f7wpev.png",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471679/p17_do574r.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525868/pic15_i6fo8a.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525863/pic16_nefg1o.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525828/pic5_zuypqt.png",
 "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525932/pic17_y8zngz.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772471699/p18_shwr5u.jpg",
  "https://res.cloudinary.com/djxx3xc6p/image/upload/v1772525833/pic28_buyie0.jpg"

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