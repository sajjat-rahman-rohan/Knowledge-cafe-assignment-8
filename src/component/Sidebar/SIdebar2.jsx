import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import BlogTitle from "../BlogTitle/BlogTitle";

const Sidebar2 = ({ blogsQuantity, marked }) => {
  let quantity = 0;

  for (const bookmarkBlog of blogsQuantity) {
    quantity = quantity + bookmarkBlog.quantity;
  }

  return (
    <div className="sidebar1 sidebar2">
      <div className="bookmarked">
        <h5 className="bookmark-title">
          <b>Bookmarked Blogs : {quantity}</b>
        </h5>
        <div>
          {marked.map((markedTitle) => (
            <BlogTitle
              key={markedTitle.id}
              markedTitle={markedTitle}
            ></BlogTitle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
