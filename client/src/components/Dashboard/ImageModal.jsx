import "./ImageModal.css";

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-image-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={image}
          alt="Preview"
          className="modal-image"
        />
      </div>
    </div>
  );
}

export default ImageModal;