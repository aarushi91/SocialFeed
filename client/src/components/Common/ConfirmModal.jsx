import "./ConfirmModal.css";

function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="confirm-modal">

        <h2>{title}</h2>

        <p>{message}</p>

        <div className="modal-actions">

          <button
            className="cancel-modal-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-modal-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;