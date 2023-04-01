import React, { useEffect, useState } from "react";
import { addToDb, getBlogQuantity } from "../../utilities/fakedb";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBlog from "../SignleBlog/SingleBlog";
import Sidebar1 from "../Sidebar/Sidebar1";
import Sidebar2 from "../Sidebar/SIdebar2";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsQuantity, setBlogsQuantity] = useState([]);
  const [spentTime, setSpentTime] = useState("");
  const [marked, setMarked] = useState([]);

  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const storedBlogQuantity = getBlogQuantity();
    const saveBlogQuantity = [];

    for (const id in storedBlogQuantity) {
      const addedBlogQuantity = blogs.find((blog) => blog.id === id);

      if (addedBlogQuantity) {
        const quantity = storedBlogQuantity[id];
        addedBlogQuantity.quantity = quantity;
        saveBlogQuantity.push(addedBlogQuantity);
      }
    }
    setBlogsQuantity(saveBlogQuantity);
  }, [blogs]);

  const handleAddToBlogQuantity = (blog) => {
    // Marked Blog state
    const newSet = [...marked, blog];
    setMarked(newSet);

    const exist = marked.find((blg) => blg.id === blog.id);
    if (!exist) {
      const newSavedBookmark = [...marked, blog];
      setMarked(newSavedBookmark);
      toast.success("Bookmark Success!");
    } else {
      toast.error("You Have Already Bookmarked This Blog!");
    }

    // Marked Blog Quantity state
    let newBlogQuantity = [];
    const exists = blogsQuantity.find((blogQ) => blogQ.id === blog.id);
    if (!exists) {
      blog.quantity = 1;
      newBlogQuantity = [...blogsQuantity, blog];
    } else {
      // toast("Already bookmarked this blog!");
      exists.quantity = exists.quantity + 1;
      const remaining = blogsQuantity.filter((blogQ) => blogQ.id !== blog.id);
      newBlogQuantity = [...remaining, exists];
    }

    setBlogsQuantity(newBlogQuantity);
    addToDb(blog.id);
  };

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
            handleAddToBlogQuantity={handleAddToBlogQuantity}
          ></SingleBlog>
        ))}
      </div>
      <div className="sidebar-container">
        <div className="sidebar">
          <Sidebar1 spentTime={spentTime}></Sidebar1>
          <Sidebar2 blogsQuantity={blogsQuantity} marked={marked}></Sidebar2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
