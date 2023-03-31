import React, { useEffect, useState } from "react";
// import { addToDbMin, getShoppingCartMin } from "../../utilities/fakedb2";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBlog from "../SignleBlog/SingleBlog";
// import Cart2 from "../Cart/Cart2";
// import Cart from "../Cart/Cart";
import "./Blog.css";

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
          {/* <Cart watchTime={watchTime}></Cart>
          <Cart2 cartMin={cartMin}></Cart2> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
