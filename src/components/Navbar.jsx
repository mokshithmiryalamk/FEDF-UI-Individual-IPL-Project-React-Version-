import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.body.classList.toggle("light-theme", savedTheme === "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle("light-theme", newTheme === "light");
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/" className="home-link">
          IPL 2026
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/fixtures">Fixtures</Link>
        <Link to="/points">Points</Link>
        <Link to="/playoffs">Playoffs</Link>
        <Link to="/news">News</Link>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;