import "./CreatePost.css";
import { useState } from "react";

function CreatePost({ onCreate }) {

  const [caption, setCaption] = useState("");

  const handleSubmit = () => {

    if (!caption.trim()) return;

    onCreate(caption);

    setCaption("");

  };

  return (

    <div className="create-post">

      <h3>Create Post</h3>

      <textarea
        placeholder="What's on your mind?"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Post
      </button>

    </div>

  );

}

export default CreatePost;