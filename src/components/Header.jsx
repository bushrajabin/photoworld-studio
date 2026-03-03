import { useEffect } from "react";
import "../App.css";

function Header() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/typewriting.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header id="header" className="vh-100 flex">
      <div className="container">
        <div className="header-content">

          <h2>
            I'm a <br />
            <span
              className="typewrite"
              data-loop="yes"
              data-speed="100"
              data-delay="2000"
              data-words='["Photographer", "Videographer", "Video Editor"]'
            ></span>
          </h2>

          <h3>Majid Ahmad</h3>

          {/* Social Links */}
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/edit.king.908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/_photoworld_studio_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com/@photoworldstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
}

export default Header;