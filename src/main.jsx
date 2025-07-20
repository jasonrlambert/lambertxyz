import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'

const Header = () => (
  <header style={{
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ddd",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>Jason Lambert</h1>
    <nav>
      <NavLink to="/" end style={({ isActive }) => ({
        marginRight: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: isActive ? "#007bff" : "#eee",
        color: isActive ? "#fff" : "#333",
        textDecoration: "none",
        borderRadius: "4px",
        border: isActive ? "1px solid #007bff" : "1px solid #ccc",
        fontWeight: isActive ? "bold" : "normal"
      })}>
        🏠 Home
      </NavLink>
      <NavLink to="/blog" style={({ isActive }) => ({
        padding: "0.5rem 1rem",
        backgroundColor: isActive ? "#007bff" : "#eee",
        color: isActive ? "#fff" : "#333",
        textDecoration: "none",
        borderRadius: "4px",
        border: isActive ? "1px solid #007bff" : "1px solid #ccc",
        fontWeight: isActive ? "bold" : "normal"
      })}>
        📘 Blog
      </NavLink>
    </nav>
  </header>
);

const Footer = () => (
  <footer style={{
    textAlign: "center",
    padding: "1.5rem",
    fontSize: "0.9rem",
    color: "#666",
    borderTop: "1px solid #ddd",
    marginTop: "3rem",
    backgroundColor: "#f5f5f5"
  }}>
    &copy; {new Date().getFullYear()} Jason Lambert. All rights reserved.
  </footer>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main style={{ padding: "2rem", minHeight: "80vh", backgroundColor: "#f9f9f9" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
