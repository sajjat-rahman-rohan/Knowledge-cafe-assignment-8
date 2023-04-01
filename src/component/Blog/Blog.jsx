import React, { useEffect, useState } from "react";
// import { addToDbMin, getShoppingCartMin } from "../../utilities/fakedb2";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBlog from "../SignleBlog/SingleBlog";
import Sidebar1 from "../Sidebar/Sidebar1";
import Sidebar2 from "../Sidebar/SIdebar2";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [spentTime, setSpentTime] = useState("");

  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToSpentTime = (time) => {
    const previousSpentTime = JSON.parse(localStorage.getItem("spentTime"));
    if (previousSpentTime) {
      const sum = previousSpentTime + time;
      localStorage.setItem("spentTime", sum);
      // console.log(sum);
      setSpentTime(sum);
    } else {
      localStorage.setItem("spentTime", time);
      setSpentTime(time);
    }
  };

  return (
    <div className="container blogs-container">
      <div className="blog-container">
        {blogs.map((blog) => (
          <SingleBlog
            key={blog.id}
            blog={blog}
            handleAddToSpentTime={handleAddToSpentTime}
          ></SingleBlog>
        ))}
      </div>
      <div className="sidebar-container">
        <div className="sidebar">
          <Sidebar1 spentTime={spentTime}></Sidebar1>
          <Sidebar2></Sidebar2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
