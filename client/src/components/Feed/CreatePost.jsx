import "./CreatePost.css";
import { useState } from "react";

function CreatePost({ onCreate }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");

    document.getElementById("post-image-input").value = "";
  };

  const handleSubmit = async () => {
    // Allow text-only, image-only, or both
    if (!text.trim() && !image) return;

    const formData = new FormData();

    formData.append("text", text);

    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      await onCreate(formData);

      setText("");
      setImage(null);
      setPreview("");

      document.getElementById("post-image-input").value = "";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post">

      <h3>Create Post</h3>

      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label
        htmlFor="post-image-input"
        className="upload-btn"
      >
        📷 Choose Image
      </label>

      <input
        id="post-image-input"
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />

      {preview && (
        <div className="preview-container">

  <img
    src={preview}
    alt="Preview"
    className="preview-image"
  />

  <button
    type="button"
    className="remove-image-btn"
    onClick={removeImage}
  >
    &times;
  </button>

</div>
      )}

      <button
        className="post-btn"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? "Posting..." : "Post"}
      </button>

    </div>
  );
}

export default CreatePost;