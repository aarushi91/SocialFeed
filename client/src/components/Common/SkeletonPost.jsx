import "./SkeletonPost.css";

function SkeletonPost() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>

        <div className="skeleton-user">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line tiny"></div>
        </div>
      </div>

      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>

      <div className="skeleton-image"></div>
    </div>
  );
}

export default SkeletonPost;