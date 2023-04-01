import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar2 = ({ blogsQuantity }) => {
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
        <h5 className="bookmark-blog"></h5>
      </div>
    </div>
  );
};

export default Sidebar2;
