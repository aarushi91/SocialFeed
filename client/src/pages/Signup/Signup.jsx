import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../../api/authApi";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {

    if (!validateForm()) return;

    try {

      setLoading(true);

      const username = email.split("@")[0];

      const response = await registerUser({
        fullName: name,
        username,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="signup-page">
      <Link to="/" className="auth-logo">
        💬 SocialFeed
      </Link>

      {/* Background Glow */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="signup-container">

        {/* Left Section */}
        <div className="signup-left">

          <h1>Join SocialFeed 🚀</h1>

          <p>
            Create your account and become a part of our growing
            social community. Share your moments, connect with
            friends and explore amazing content.
          </p>

          <div className="signup-features">

            <div>✔ Create Your Profile</div>
            <div>✔ Connect with Friends</div>
            <div>✔ Share Photos & Videos</div>
            <div>✔ Real-time Notifications</div>

          </div>

        </div>

        {/* Signup Card */}

        <div className="signup-card">

          <h2>Create Account</h2>

          <p className="subtitle">
            Start your journey with SocialFeed
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >

            <div className="input-group">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {errors.name && <small className="error">{errors.name}</small>}

            </div>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            {errors.email && <small className="error">{errors.email}</small>}

            </div>

            <div className="input-group">

              <label>Password</label>

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && (
                <small className="error">
                  {errors.password}
                </small>
              )}

            </div>

            <div className="input-group">

              <label>Confirm Password</label>

              <div className="password-box">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.confirmPassword && (
                <small className="error">
                  {errors.confirmPassword}
                </small>
              )}

            </div>

            <button
              className="signup-btn"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <div className="divider">

            <span>OR</span>

          </div>

          <button className="google-btn">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
            />

            Continue with Google

          </button>

          <p className="login-link">

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;