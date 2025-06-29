import React from "react";

function Contact() {
  const customStyle = {
    margin: '25px auto',
  };
  return (
    <section style={customStyle} id="contact" className="fade-in">
      <div className="cntContent">
        <h2>Contact Me</h2>
        <form className="contact-form" autoComplete="on">
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="on"
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="on"
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-comment"></i>
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
