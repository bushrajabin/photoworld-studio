
function Reels() {

  const reels = [
    "https://res.cloudinary.com/djxx3xc6p/video/upload/v1772526589/AQPCbwh5vuIUm4QlIZAcsjPVN3WucqO2989RnbEjgKMljWtOFOPU-vljXBeEq8kcXJPFCljTu11dFSXf6Cv5pjYm8WSViTzvi_sYKg8_z5kmdq.mp4",
    "https://res.cloudinary.com/djxx3xc6p/video/upload/f_mp4/v1772528809/IMG_4537_ifzt3f.mov",
    "https://res.cloudinary.com/djxx3xc6p/video/upload/f_mp4/v1772527383/IMG_4521_cakhep.mov"
  ];

  return (
    <section className="reels-section">
      <h2 className="reels-title">REELS SHOOT</h2>

      <div className="reels-grid">
        {reels.map((video, index) => (
          <div key={index} className="reels-card">
            <video
              src={video}
              muted
              loop
              controls
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;