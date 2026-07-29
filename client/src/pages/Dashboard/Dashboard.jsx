import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../../api/authApi";
import {
  createPost,
  getPosts,
  toggleLike,
} from "../../api/postApi";

import Navbar from "../../components/Dashboard/Navbar";
import ProfileCard from "../../components/Dashboard/ProfileCard";
import CreatePost from "../../components/Feed/CreatePost";
import PostList from "../../components/Dashboard/PostList";

function Dashboard() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const loadDashboard = async () => {

      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {

        const profile = await getProfile(token);
        setUser(profile.data.user);

        const allPosts = await getPosts(token);
        setPosts(allPosts.data.posts);

      } catch (err) {

        localStorage.removeItem("token");
        navigate("/login");

      }

    };

    loadDashboard();

  }, []);

  const handleCreatePost = async (caption) => {

    try {

      const token = localStorage.getItem("token");

      await createPost(caption, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (err) {

      alert("Failed to create post");

    }

  };

  const handleLike = async (postId) => {
    try {

      const token = localStorage.getItem("token");

      await toggleLike(postId, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (error) {

      alert("Unable to like post");

    }
  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (

    <div className="dashboard-page">

      <Navbar onLogout={handleLogout} />

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

        <div className="dashboard-right">

          <CreatePost onCreate={handleCreatePost} />

          <PostList
            posts={posts}
            onLike={handleLike}
          />

        </div>

      </div>

      <footer className="dashboard-footer">
        © 2026 SocialFeed | Built with ❤️ using MERN Stack
      </footer>

    </div>

  );

}

export default Dashboard;