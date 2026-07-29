import "./PostList.css";

function PostList({ posts, onLike }) {
  return (
    <div className="post-list">

      <h2>Recent Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post._id}>

            <div className="post-header">

              <img
                src={post.author.avatar}
                alt=""
                className="post-avatar"
              />

              <div>
                <h4>{post.author.fullName}</h4>
                <span>@{post.author.username}</span>
              </div>

            </div>

            <p className="post-text">
              {post.text}
            </p>

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

          </div>
        ))
      )}

    </div>
  );
}

export default PostList;