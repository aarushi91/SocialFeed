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
  updatePost,
  deleteComment,
} from "../../api/postApi";

import Navbar from "../../components/Dashboard/Navbar";
import ProfileCard from "../../components/Dashboard/ProfileCard";
import CreatePost from "../../components/Feed/CreatePost";
import PostList from "../../components/Dashboard/PostList";
import ConfirmModal from "../../components/Common/ConfirmModal";

import { toast } from "react-toastify";

function Dashboard() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [creating, setCreating] = useState(false);
  const [likingPost, setLikingPost] = useState(null);
  const [commentingPost, setCommentingPost] = useState(null);
  const [deletingPost, setDeletingPost] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

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

  const handleCreatePost = async (formData) => {
    try {
      setCreating(true);

      const token = localStorage.getItem("token");

      await createPost(formData, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

      toast.success("Post created!");
    } catch (err) {
      toast.error("Failed to create post");
    } finally {
      setCreating(false);
    }
  };

  const handleLike = async (postId) => {

    try {

      setLikingPost(postId);

      const token = localStorage.getItem("token");

      await toggleLike(postId, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

    } catch (error) {

      toast.error("Unable to like post");

    } finally {

      setLikingPost(null);

    }

  };

  const handleComment = async (postId, text) => {

    try {

      setCommentingPost(postId);

      const token = localStorage.getItem("token");

      await addComment(postId, text, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

      toast.success("Comment added");

    } catch (error) {

      toast.error("Failed to add comment");

    } finally {

      setCommentingPost(null);

    }

  };

  const handleDelete = (postId) => {

    setSelectedPost(postId);

    setShowDeleteModal(true);

  };

  const confirmDelete = async () => {

    try {

      setDeletingPost(selectedPost);

      const token = localStorage.getItem("token");

      await deletePost(selectedPost, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

      toast.success("Post deleted");

    } catch (err) {

      toast.error("Failed to delete post");

    } finally {

      setDeletingPost(null);

      setShowDeleteModal(false);

      setSelectedPost(null);

    }

  };

  const handleUpdate = async (postId, text) => {

    try {

      const token = localStorage.getItem("token");

      await updatePost(postId, text, token);

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

      toast.success("Post updated successfully");

    } catch (err) {

      toast.error("Unable to update post");

    }

  };

  const handleDeleteComment = async (
    postId,
    commentId
  ) => {

    try {

      const token = localStorage.getItem("token");

      await deleteComment(
        postId,
        commentId,
        token
      );

      const updatedPosts = await getPosts(token);

      setPosts(updatedPosts.data.posts);

      toast.success("Comment deleted");

    } catch {

      toast.error("Unable to delete comment");

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

          <CreatePost
            onCreate={handleCreatePost}
            creating={creating}
          />

          <PostList
            posts={posts}
            onLike={handleLike}
            onComment={handleComment}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            currentUser={user}
            likingPost={likingPost}
            commentingPost={commentingPost}
            deletingPost={deletingPost}
            onDeleteComment={handleDeleteComment}
          />

          <ConfirmModal
            isOpen={showDeleteModal}
            title="Delete Post?"
            message="This action cannot be undone. Are you sure you want to permanently delete this post?"
            onConfirm={confirmDelete}
            onCancel={() => {

              setShowDeleteModal(false);

              setSelectedPost(null);

            }}
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