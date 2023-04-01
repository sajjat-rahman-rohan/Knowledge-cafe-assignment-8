import React from "react";
import "../Sidebar/Sidebar.css";

const BlogTitle = (props) => {
  const title = props.markedTitle.blogTitle;
  return (
    <div>
      <h2 className="bookmark-blog">{title}</h2>
    </div>
  );
};

export default BlogTitle;
