import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null); // untuk tombol

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Books", path: "/books" },
    { label: "Team", path: "/teams" },
    { label: "Contact", path: "/contact" },
  ];

  const baseButtonStyle = {
    borderColor: "#ff69b4",
    color: "#ff69b4",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  };

  const hoverButtonStyle = {
    backgroundColor: "#ff69b4",
    color: "white",
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom container">
      {/* Logo */}
      <a className="d-flex align-items-center mb-2 mb-md-0 text-decoration-none">
        <i className="fa-solid fa-book fa-2xl me-2" style={{ color: "pink" }}></i>
        <span className="fs-4 fw-bold" style={{ color: "pink" }}>
          BookStore
        </span>
      </a>

      {/* Nav */}
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="nav-link px-3"
              onMouseEnter={() => setHoveredNav(index)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                color: hoveredNav === index ? "pink" : "#000",
                textDecoration: hoveredNav === index ? "underline" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="text-end">
        <Link to="/login">
          <button
            type="button"
            style={
              hoveredBtn === "login"
                ? { ...baseButtonStyle, ...hoverButtonStyle }
                : baseButtonStyle
            }
            onMouseEnter={() => setHoveredBtn("login")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="btn me-2"
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            type="button"
            style={
              hoveredBtn === "register"
                ? { ...baseButtonStyle, ...hoverButtonStyle }
                : baseButtonStyle
            }
            onMouseEnter={() => setHoveredBtn("register")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="btn me-2"
          >
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
