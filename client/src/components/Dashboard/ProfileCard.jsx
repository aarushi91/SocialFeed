import "./ProfileCard.css";

function ProfileCard({ user, posts }) {

  const myPosts = posts.filter(
    (post) => post.author._id === user._id
  );

  const totalLikes = myPosts.reduce(
    (sum, post) => sum + post.likes.length,
    0
  );

  const totalComments = myPosts.reduce(
    (sum, post) => sum + post.comments.length,
    0
  );

  return (

    <div className="profile-card">

      <img
        src={user.avatar}
        alt="avatar"
        className="profile-avatar"
      />

      <h2>{user.fullName}</h2>

      <p className="username">
        @{user.username}
      </p>

      <p className="online-status">
        🟢 Online
      </p>

      <div className="profile-details">

        <p>
          <strong>Email</strong>
        </p>

        <span>{user.email}</span>

        <p>
          <strong>Bio</strong>
        </p>

        <span>{user.bio}</span>

        <div className="profile-stats">

          <div className="stat-box">
            <h3>{myPosts.length}</h3>
            <span>Posts</span>
          </div>

          <div className="stat-box">
            <h3>{totalLikes}</h3>
            <span>Likes</span>
          </div>

          <div className="stat-box">
            <h3>{totalComments}</h3>
            <span>Comments</span>
          </div>

        </div>  

        <p>
          <strong>Verified</strong>
        </p>

        <span>
          {user.isVerified ? "Yes ✅" : "No"}
        </span>

      </div>

    </div>

  );

}

export default ProfileCard;