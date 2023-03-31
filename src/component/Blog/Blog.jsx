import React, { useEffect, useState } from "react";
// import { addToDbMin, getShoppingCartMin } from "../../utilities/fakedb2";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBlog from "../SignleBlog/SingleBlog";
import "./Blog.css";
import Sidebar1 from "../Sidebar/Sidebar1";
import Sidebar2 from "../Sidebar/SIdebar2";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container blogs-container">
      <div className="blog-container">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
      <div className="sidebar-container">
        <div className="sidebar">
          <Sidebar1></Sidebar1>
          <Sidebar2></Sidebar2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
