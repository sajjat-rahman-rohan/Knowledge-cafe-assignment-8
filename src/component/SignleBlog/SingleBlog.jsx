import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleBlog.css";

const SingleBlog = (props) => {
  const {
    authorImage,
    authorName,
    publishDate,
    readTime,
    blogTitle,
    img,
    price,
  } = props.blog;

  const handleAddToSpentTime = props.handleAddToSpentTime;
  const handleAddToBlogQuantity = props.handleAddToBlogQuantity;

  return (
    <div className="blog">
      <img className="w-100" src={img} alt="" />
      <div className="single-blog">
        <div className="single-blog-info">
          <div className="d-flex align-items-center ">
            <img className="img" src={authorImage} alt="" />
            <div>
              <h5 className="author-name">{authorName}</h5>
              <p>{publishDate}</p>
            </div>
          </div>
          <h2 className="single-blog-title">{blogTitle}</h2>
          <p>
            <span className="blog-min">#beginners</span>
            {"  "}
            <span className="blog-min">#programming</span>
          </p>
          <button
            onClick={() => handleAddToSpentTime(readTime)}
            className="blog-btn"
          >
            Mark as read
          </button>
          {/* <p>{price}</p> */}
        </div>
        <span className="blog-min">
          {readTime} min read{" "}
          <span onClick={() => handleAddToBlogQuantity(props.blog)}>
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </span>
      </div>
      <hr /> <br />
    </div>
  );
};

export default SingleBlog;
