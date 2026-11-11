import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../lib/config";
import "./whatsapp.css";

// Click karte hi client ka WhatsApp khulta hai, message pehle se likha hua.
function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
