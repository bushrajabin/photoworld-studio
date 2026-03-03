
function Reels() {

  const reels = [
    "https://res.cloudinary.com/djxx3xc6p/video/upload/v1772526589/AQPCbwh5vuIUm4QlIZAcsjPVN3WucqO2989RnbEjgKMljWtOFOPU-vljXBeEq8kcXJPFCljTu11dFSXf6Cv5pjYm8WSViTzvi_sYKg8_z5kmdq.mp4"
  ];

  return (
    <section className="reels-section">
      <h2 className="reels-title">REELS SHOOT</h2>

      <div className="reels-container">
        {reels.map((video, index) => (
          <div key={index} className="reels-card">
            <video
              src={video}
              controls
              autoPlay
              loop
              muted
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;