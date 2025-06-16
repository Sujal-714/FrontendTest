import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: "", content: "" });
  const navigate = useNavigate();
const apiBase = import.meta.env.VITE_API_URL ;
  useEffect(() => {
    axios.get(`${apiBase}/api/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${apiBase}/a/api/posts/${id}`, post);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
        />
        <br/>
        <br />
        <br />
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Content"
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;
