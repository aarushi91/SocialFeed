import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">

          <h2>SocialFeed</h2>

          <p>
            Build your own real-time social networking platform using
            the MERN Stack. Fast, Secure and Modern.
          </p>

          <div className="social-icons">

            <a href="#"><FaGithub /></a>

            <a href="#"><FaLinkedin /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaTwitter /></a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>

          <a href="#">Features</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </div>

        {/* Resources */}

        <div className="footer-links">

          <h3>Resources</h3>

          <a href="#">Documentation</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

          <a href="#">Support</a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 SocialFeed. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;