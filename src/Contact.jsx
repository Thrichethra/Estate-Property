import React, { useState } from "react";
import Back from "./Back.jsx";

const Contact = () => {
  const coverImg =
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, email address, and message.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("rentup_inquiries") || "[]");
    localStorage.setItem(
      "rentup_inquiries",
      JSON.stringify([
        { ...formData, date: new Date().toLocaleDateString() },
        ...existing,
      ])
    );

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="contact mb">
      <Back
        name="Contact Us"
        title="Get Help & Friendly Support"
        cover={coverImg}
      />

      <div className="container mtop">
        {/* Quick Contact Info Cards */}
        <div className="grid3" style={{ marginBottom: "40px" }}>
          <div className="contact-info-card shadow">
            <i className="fa-solid fa-location-dot"></i>
            <h4>Office Location</h4>
            <p>420 Greenview Avenue, London, UK</p>
          </div>
          <div className="contact-info-card shadow">
            <i className="fa-solid fa-phone"></i>
            <h4>Call Us Directly</h4>
            <p>+44 20 7946 0921 (Mon–Sat, 9am–6pm)</p>
          </div>
          <div className="contact-info-card shadow">
            <i className="fa-solid fa-envelope"></i>
            <h4>Email Support</h4>
            <p>support@rentup-estates.com</p>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <form className="shadow" onSubmit={handleSubmit}>
          <h4>Send Us a Message</h4>
          <p style={{ color: "#72809d", marginBottom: "20px" }}>
            Have a question about a property or scheduling a viewing? Our agents reply within 2 hours.
          </p>

          {error && <div className="alert-error">{error}</div>}
          {submitted && (
            <div className="alert-success">
              Thank you! Your inquiry has been received. An agent will contact you shortly.
            </div>
          )}

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (e.g. Schedule Viewing for Prop1)"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Write your message here... *"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            <i className="fa fa-paper-plane"></i> Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;