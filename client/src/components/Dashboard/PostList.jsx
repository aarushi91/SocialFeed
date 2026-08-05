import "./PostList.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

function PostList({
  posts,
  onLike,
  onComment,
  onDelete,
  onUpdate,
  currentUser,
}) {

  const [commentText, setCommentText] = useState({});

  const [editingPost, setEditingPost] = useState(null);

  const [editedText, setEditedText] = useState("");

  return (

    <div className="post-list">

      <h2>Recent Posts</h2>

      {posts.length === 0 ? (

        <div className="empty-feed">

          <h2>📝</h2>

          <h3>No Posts Yet</h3>

          <p>

            Be the first to share something with your friends!

          </p>

        </div>

      ) : (

        posts.map((post) => (

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

              {currentUser && currentUser._id === post.author._id && (

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
                    onClick={() => onDelete(post._id)}
                  >
                    🗑 Delete
                  </button>

                </div>

              )}

            </div>

            {/* Post Text */}

            {editingPost === post._id ? (

              <textarea
                className="edit-textarea"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />

            ) : (

              <>

                <p className="post-text">
                  {post.text}
                </p>

                {post.image && (
                  <img
                    src={`http://localhost:5000${post.image}`}
                    alt="Post"
                    className="post-image"
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

            {/* Like + Comment Count */}

            <div className="post-actions">

              <button
                className="like-btn"
                onClick={() => onLike(post._id)}
              >
                ❤️ {post.likes.length} Likes
              </button>

              <span>
                💬 {post.comments.length} Comments
              </span>

            </div>

            {/* Comment Input */}

            <div className="comment-box">

              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText[post._id] || ""}
                onChange={(e) =>
                  setCommentText({
                    ...commentText,
                    [post._id]: e.target.value,
                  })
                }
              />

              <button
                onClick={() => {

                  const text = commentText[post._id];

                  if (!text?.trim()) return;

                  onComment(post._id, text);

                  setCommentText({
                    ...commentText,
                    [post._id]: "",
                  });

                }}
              >
                Comment
              </button>

            </div>

            {/* All Comments */}

            <div className="comments">

              {post.comments.map((comment) => (

                <div
                  className="comment"
                  key={comment._id}
                >

                  <strong>
                    {comment.user.fullName}
                  </strong>

                  <p>
                    {comment.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default PostList;