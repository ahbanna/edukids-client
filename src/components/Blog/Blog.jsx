import React from "react";
import "./Blog.css";
import useTitle from "../../hooks/useTitle";
const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <h2>This is blog</h2>
    </div>
  );
};

export default Blog;
