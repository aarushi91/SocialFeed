import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../../api/authApi";
import {
  createPost,
  getPosts,
  toggleLike,
  addComment,
  deletePost,
} from "../../api/postApi";

import Navbar from "../../components/Dashboard/Navbar";
import ProfileCard from "../../components/Dashboard/ProfileCard";
import CreatePost from "../../components/Feed/CreatePost";
import PostList from "../../components/Dashboard/PostList";

import { toast } from "react-toastify";

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

      toast.error("Failed to create post");

    }

    toast.success("Post created!");

  };

  const handleLike = async (postId) => {
    try {

      const token = localStorage.getItem("token");

      await toggleLike(postId, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (error) {

      toast.error("Unable to like post");

    }
  };

  const handleComment = async (postId, text) => {
    try {
      const token = localStorage.getItem("token");

      await addComment(postId, text, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (error) {
      toast.error("Failed to add comment");
    }

    toast.success("Comment added");

  };

  const handleDelete = async (postId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("token");

      await deletePost(postId, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (error) {

      toast.error("Failed to delete post");

    }

    toast.success("Post deleted");

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
            onComment={handleComment}
            onDelete={handleDelete}
            currentUser={user}
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