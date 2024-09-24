import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Blog</h2>
      </div>

      <div>
        No Posts Available
      </div>
      
      <div className="row">
        {posts.map((post: any) => (
          <div className="col-md-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <span className="badge text-bg-secondary">Post Id: {post.id}</span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <a href="/" className="card-link">
                  View more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
