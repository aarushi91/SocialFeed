import "./PostList.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { FiTrash2 } from "react-icons/fi";
import ImageModal from "./ImageModal";

function PostList({
  posts,
  search,
  onLike,
  onComment,
  onDelete,
  onUpdate,
  currentUser,
  likingPost,
  commentingPost,
  deletingPost,
  onDeleteComment,
}) {
  const [commentText, setCommentText] = useState({});
  const [editingPost, setEditingPost] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="post-list">
        <h2>Recent Posts</h2>

        {posts.length === 0 ? (
          search ? (
            <div className="empty-feed">
              <h2>🔍</h2>

              <h3>No matching posts</h3>

              <p>
                Try another username or caption.
              </p>
            </div>
          ) : (
            <div className="empty-feed">
              <h2>📝</h2>

              <h3>No Posts Yet</h3>

              <p>
                Be the first to share something with your friends!
              </p>
            </div>
          )
        ) : (
          posts.map((post) => {
            const isLiked = post.likes.some(
              (id) =>
                (typeof id === "string" ? id : id._id) === currentUser?._id
            );

            return (
              <div
                className="post-card"
                key={post._id}
              >
                {/* Post Header */}

                <div className="post-header">
                  <div className="user-info">
                    <img
                      src={post.author.avatar}
                      alt=""
                      className="post-avatar"
                    />

                    <div>
                      <h4>{post.author.fullName}</h4>

                      <span>@{post.author.username}</span>

                      <small className="post-time">
                        {formatDistanceToNow(
                          new Date(post.createdAt),
                          { addSuffix: true }
                        )}
                      </small>
                    </div>
                  </div>

                  {currentUser &&
                    currentUser._id === post.author._id && (
                      <div className="owner-actions">
                        <button
                          className="edit-btn"
                          onClick={() => {
                            setEditingPost(post._id);
                            setEditedText(post.text);
                          }}
                        >
                          ✏ Edit
                        </button>

                        <button
                          className="delete-btn"
                          disabled={deletingPost === post._id}
                          onClick={() => onDelete(post._id)}
                        >
                          {deletingPost === post._id
                            ? "Deleting..."
                            : "🗑 Delete"}
                        </button>
                      </div>
                    )}
                </div>

                {/* Post Content */}

                {editingPost === post._id ? (
                  <textarea
                    className="edit-textarea"
                    value={editedText}
                    onChange={(e) =>
                      setEditedText(e.target.value)
                    }
                  />
                ) : (
                  <>
                    {post.text && (
                      <p className="post-text">
                        {post.text}
                      </p>
                    )}

                    {post.image && (
                      <img
                        src={`http://localhost:5000${post.image}`}
                        alt="Post"
                        className="post-image"
                        onClick={() =>
                          setSelectedImage(
                            `http://localhost:5000${post.image}`
                          )
                        }
                      />
                    )}
                  </>
                )}

                {editingPost === post._id && (
                  <div className="edit-actions">
                    <button
                      className="save-btn"
                      onClick={() => {
                        onUpdate(post._id, editedText);
                        setEditingPost(null);
                      }}
                    >
                      Save
                    </button>

                    <button
                      className="cancel-btn"
                      onClick={() => {
                        setEditingPost(null);
                        setEditedText("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {/* Like + Comment */}

                <div className="post-actions">
                  <button
                    className={`like-btn ${isLiked ? "liked" : ""}`}
                    disabled={likingPost === post._id}
                    onClick={() => onLike(post._id)}
                  >
                    {likingPost === post._id
                      ? "..."
                      : isLiked
                      ? "❤️ Liked"
                      : "🤍 Like"}{" "}
                    ({post.likes.length})
                  </button>

                  <span>
                    💬 {post.comments.length} Comments
                  </span>
                </div>

                {/* Comment Box */}

                <div className="comment-box">
                  <input
                    type="text"
                    placeholder="Share your thoughts..."
                    value={commentText[post._id] || ""}
                    onChange={(e) =>
                      setCommentText({
                        ...commentText,
                        [post._id]: e.target.value,
                      })
                    }
                  />

                  <button
                    disabled={
                      commentingPost === post._id ||
                      !(commentText[post._id] || "").trim()
                    }
                    onClick={() => {
                      const text = commentText[post._id];

                      onComment(post._id, text);

                      setCommentText({
                        ...commentText,
                        [post._id]: "",
                      });
                    }}
                  >
                    {commentingPost === post._id
                      ? "Adding..."
                      : "Comment"}
                  </button>
                </div>

                {/* Comments */}

                <div className="comments">
                  {post.comments.map((comment) => (
                    <div
                      className="comment"
                      key={comment._id}
                    >
                      <div className="comment-header">
                        <strong>
                          {comment.user.fullName}
                        </strong>

                        {currentUser &&
                          currentUser._id ===
                            comment.user._id && (
                            <button
                              className="delete-comment-btn"
                              onClick={() =>
                                onDeleteComment(
                                  post._id,
                                  comment._id
                                )
                              }
                            >
                              <FiTrash2 />
                            </button>
                          )}
                      </div>

                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Image Preview Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}

export default PostList;