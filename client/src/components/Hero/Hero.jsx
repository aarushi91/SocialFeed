import "./Hero.css";
import heroImage from "../../assets/hero.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-badge">
            🚀 Next Generation Social Platform
          </div>

          <h1>
            Build Your Own
            <br />
            <span>Social Media</span>
            <br />
            Platform
          </h1>

          <p>
            Connect with friends, share moments instantly,
            communicate in real time and experience a modern
            social networking platform built using the MERN Stack.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">
              Get Started
            </Link>

            <a href="#features" className="secondary-btn">
              Learn More
            </a>
          </div>

          <div className="hero-list">
            <div>✔ Real-time Messaging</div>
            <div>✔ Secure Login</div>
            <div>✔ MERN Stack</div>
          </div>

          <div className="scroll-down">
            ↓ Scroll Down
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="hero-image">

            <img
              src={heroImage}
              alt="Hero Illustration"
            />

            <div className="floating-card">

              <div className="profile">

                <div className="avatar"></div>

                <div>
                  <h4>Aarushi</h4>
                  <span>Just posted a new update 🚀</span>
                </div>

              </div>

              <div className="stats">
                ❤️ 245 &nbsp;&nbsp; 💬 38
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;