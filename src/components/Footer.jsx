import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <ul className="site-footer-social">
          <li>
            <a
              href="https://www.facebook.com/edit.king.908"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_photoworld_studio_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@photoworldstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>

        <p className="site-footer-copy">
          © {new Date().getFullYear()} Photoworld Studio. All rights reserved.
        </p>

        <Link to="/admin" className="site-footer-admin">
          Admin Panel
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
