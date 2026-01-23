import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <p>📧 Email: info@saroxtech.com</p>
            <p>🐦 Twitter: @saroxtech</p>
            <p>💼 LinkedIn: SaroX Tech</p>
          </div>
        </div>
      </section>
    </div>
  );
}
