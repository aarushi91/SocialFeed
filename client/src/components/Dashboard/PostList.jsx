import "./PostList.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

function PostList({
  posts,
  onLike,
  onComment,
  onDelete,
  currentUser,
}) {

  const [commentText, setCommentText] = useState({});

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

                <button
                  className="delete-btn"
                  onClick={() => onDelete(post._id)}
                >
                  🗑 Delete
                </button>

              )}

            </div>

            {/* Post Text */}

            <p className="post-text">
              {post.text}
            </p>

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