import "./ProfileCard.css";

function ProfileCard({ user }) {

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