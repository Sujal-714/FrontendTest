import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

    // Read base API URL from env variable
  const apiBase = import.meta.env.VITE_API_URL ;

  const fetchPosts = async () => {
    const res = await axios.get(`${apiBase}/api/posts`);
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`${apiBase}/api/posts/${id}`);
    fetchPosts(); // refresh after delete
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
