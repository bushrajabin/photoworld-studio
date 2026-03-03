import React from "react";
import bgImage from "../assets/images/work-pic.jpg"

function Options() {
  const services = [
    "Cinematographer",
    "Still photography",
    "Portrait photography",
    "Candid photography",
    "Fashion photography",
    "Model shoot",
    "Album design",
    "Commercial shoot",
    "Short film",
    "Reels shoot",
    "Song making",
  ];

  return (
    <section
      id="options"
      className="options-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="options-container">

          <h2 className="options-title">WHAT AM I DOING?</h2>
          <div className="underline"></div>
          <div className="down-arrow">⌄</div>

          <div className="options-grid">
            {services.map((item, index) => (
              <div key={index} className="options-item">
                <span className="circle"></span>
                <p className="options-text">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Options;