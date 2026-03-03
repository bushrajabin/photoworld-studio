import { Link } from "react-router-dom";

function Portfolio() {
  const projects = [
    { id: 1, title: "Album Shoot", link: "/album" },
    { id: 2, title: "Model Shoots", link: "/ModelShoot" },
    { id: 3, title: "Portraits", link: "/portrait" },
    { id: 4, title: "Reels", link: "/reels" },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-section">
        <h5>MY LATEST WORK</h5>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="portfolio-card">
              <span>{project.id}</span>
              <h3>{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;