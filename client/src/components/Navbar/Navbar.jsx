import "./Navbar.css";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FaComments className="logo-icon" />

        <Link to="/" className="logo-text">
          SocialFeed
        </Link>

      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#features">Features</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Contact</a></li>

      </ul>

      <Link to="/login" className="nav-login-btn">

        Login

      </Link>

    </nav>
  );
}

export default Navbar;