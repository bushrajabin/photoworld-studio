import React from "react";
import contactImage from "../assets/images/pic14.jpeg";
import PaymentImage from "../assets/images/payment.jpeg";

function Contact() {
  return (
    <section id="contact" className="py-7">
      <div className="container">
        <div className="contact-content flex">

          {/* Left Side */}
          <div className="contact-left">
            <div className="title">
              <h2>Contact With Me</h2>
            </div>

            <p className="lead">
              <i className="fas fa-phone-alt"></i> +91 8002924050
            </p>

            <p className="lead">
              <i className="fas fa-envelope"></i> majidkhankne786@gmail.com
            </p>

            <form
              action="https://formspree.io/f/mbldbnew"
              method="POST"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                required
                autoComplete="off"
              />

              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                required
                autoComplete="off"
              />

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Your Message Here..."
                className="form-control"
                autoComplete="off"
              ></textarea>

              <button type="submit" className="btn-submit btn">
                Submit
              </button>
            </form>
          </div>

          {/* rigth side */}
          <div className="contact-right">
            <img src={contactImage} alt="Contact" />
            <img src={PaymentImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;