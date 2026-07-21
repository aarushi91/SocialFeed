import "./Login.css";
import { useState } from "react";
import { FaComments, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const validateForm = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="login-page">
      <Link to="/" className="auth-logo">
        💬 SocialFeed
      </Link>

      {/* Background Glow */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="login-container">

        {/* Left Side */}
        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue connecting with your friends,
            share your moments and explore your personalized
            social feed.
          </p>

          <div className="login-features">

            <div>✔ Secure Authentication</div>
            <div>✔ Real-time Messaging</div>
            <div>✔ Share Photos & Posts</div>
            <div>✔ Connect with Friends</div>

          </div>

        </div>

        {/* Right Side */}
        <div className="login-card">

          <h2>Login</h2>

          <p className="subtitle">
            Sign in to your SocialFeed account
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (validateForm()) {
                alert("Login Successful!");
              }
            }}
          >

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <small className="error">
                  {errors.email}
                </small>
              )}
            </div>

            <div className="input-group">

              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {errors.password && (
                  <small className="error">
                    {errors.password}
                  </small>
                )}

                <span
                  className="eye-icon"
                  onClick={()=>setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

              </div>

            </div>

            <div className="forgot-password">
              Forgot Password?
            </div>

            <button className="login-btn">
              Login
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt=""
            />

            Continue with Google

          </button>

          <p className="signup-link">
            Don't have an account?
            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;