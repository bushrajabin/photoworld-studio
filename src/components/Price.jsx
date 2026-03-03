import React from "react";

function Price() {

  const packages = [
    {
      name: "BRONZE",
      price: "20,000",
      features: [
        "Traditional Video",
        "Still Photography",
        "Highlight Video",
        "Pota Light for Stage",
        "Drone Shoot One Day",
      ],
    },
    {
      name: "SILVER",
      price: "25,000",
      features: [
        "Traditional Video",
        "Still Videography",
        "Highlight Video",
        "20 Sheet Albums",
        "Drone Shoot One Day",
      ],
    },
    {
      name: "GOLD",
      price: "30,000",
      features: [
        "Cinematic Video",
        "Full Cinematic Video (40min-1hr)",
        "1 Drone Shoot",
        "Photography",
      ],
    },
    {
      name: "DIAMOND",
      price: "35,000",
      features: [
        "Traditional Videography",
        "Cinematic Video",
        "25 Sheet Albums",
        "Drone Shoot",
        "LC-500 (RGB Light)",
        "Full Cinematic Video (40min-1hr)",
        "Reels / Highlights",
      ],
    },
    {
      name: "ACE PACKAGE",
      price: "40,000",
      features: [
        "Traditional Videography",
        "Still Photography",
        "1 Candid Photography",
        "Cinematic Videography",
        "25 Sheet Albums",
        "Cinematic Highlight",
        "Drone Shoot One Day",
        "Reels Making / Highlights",
        "Full Traditional Video (1-2 hrs)",
      ],
    },
    {
      name: "CONQUEROR PACKAGE",
      price: "50,000",
      features: [
        "Cinematic Videography (40min-1hr)",
        "Still Photography",
        "Candid Photography",
        "Cinematic Highlight",
        "30 Sheet Albums",
        " Drone Shoot (For 2 Days)",
        "Reels / Highlights",
        "Professional Direction",
        "LC-500 (RGB Light)",
        "Traditional Video (1hr-2hr)",
      ],
    },
  ];

  return (
    <section id="price">
      <div className="price-title">
        <h2>PRICE</h2>
      </div>

      <div className="price-container">
        {packages.map((pkg, index) => (
          <div key={index} className="price-card">
            <h3>{pkg.name}</h3>
            <h4>₹ {pkg.price}</h4>

            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;