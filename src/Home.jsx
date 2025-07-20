import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (This is a placeholder — wire up your backend or Netlify Forms here)");
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "2rem",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Jason Lambert
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        I’m a follower of Jesus, a husband, and a father. I enjoy spending time with my family and I also enjoy technology.
      </p>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        This site is a place where I share insights and projects that reflect what I’ve learned — and what I’m still learning — about tech, leadership, and life.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        ></textarea>
        <button type="submit" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#007bff", color: "#fff", border: "none" }}>
          Send
        </button>
      </form>
    </div>
  );
}
