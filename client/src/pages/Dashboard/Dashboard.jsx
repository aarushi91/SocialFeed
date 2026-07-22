import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../../api/authApi";

import Navbar from "../../components/Dashboard/Navbar";
import ProfileCard from "../../components/Dashboard/ProfileCard";
import FeedPlaceholder from "../../components/Dashboard/FeedPlaceholder";

function Dashboard() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getProfile(token);

        setUser(response.data.user);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="loading">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <Navbar onLogout={handleLogout} />

      {/* Welcome Section */}

      <div className="dashboard-header">

        <h1>
          Welcome Back, {user.fullName} 👋
        </h1>

        <p>
          Ready to connect with your friends today?
        </p>

      </div>

      <div className="dashboard-layout">

        <ProfileCard user={user} />

        <FeedPlaceholder />

      </div>

      <footer className="dashboard-footer">

        © 2026 SocialFeed | Built with ❤️ using MERN Stack

      </footer>

    </div>
  );
}

export default Dashboard;