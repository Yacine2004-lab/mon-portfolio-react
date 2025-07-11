import React from "react";

export function Contact() {
  return (
    <section className="contact-section">
      <h2>📬 Contactez-moi</h2>
      <div className="contact-container">
        <div className="contact-item">
          <span>📧</span>
          <a href="mailto:yacinesall262@gmail.com">yacinesall262@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <a href="tel:+221781818340">+221 78 181 83 40</a>
        </div>
        <div className="contact-item">
          <span>💼</span>
          <a
            href="https://www.linkedin.com/in/yacine-sall-88044a361"
            target="_blank"
            rel="noreferrer"
          >
            Mon profil LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <span>🐱‍💻</span>
          <a
            href="https://github.com/yacine2004-lab"
            target="_blank"
            rel="noreferrer"
          >
            Mon profil GitHub
          </a>
        </div>
      </div>

     
    </section>
  );
}
