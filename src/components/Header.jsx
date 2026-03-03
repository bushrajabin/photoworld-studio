import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../App.css";

function Header() {
  const words = ["Photographer", "Videographer", "Video Editor"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <header id="header" className="vh-100 flex">
      <div className="container">
        <div className="header-content">
          <h2>
            I'm a <br />
            <span className="typed-wrapper">
              <span className="typed-text">{text}</span>
            </span>
          </h2>

          <h3>Majid Ahmad</h3>

          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/edit.king.908" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/_photoworld_studio_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="https://youtube.com/@photoworldstudio" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;