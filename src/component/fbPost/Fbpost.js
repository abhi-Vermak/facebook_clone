import React from "react";
import { Close, MoreHoriz, Person, ThumbUp } from "@mui/icons-material";
import "./fbpost.css";

function Fbpost() {
  return (
    <div>
      <div>
        <div className="postContainer">
          <div className="profile">
            <img
              className="profileImage"
              src="/assets/person/5.jpg"
              alt="Image"
            />
            <div className="nameAndTime">
              <h3 className="userName">Abhishek Verma</h3>
              <span>
                {" "}
                4 january at 10:30. <Person />
              </span>
            </div>
            <div className="icons">
              <MoreHoriz className="icon" />
              <Close className="icon" />
            </div>
          </div>
          <div className="description">
            <p>
              {" "}
              sapiente quae voluptate animi, illum est impedit tempora
              voluptatum itaque voluptatem. Cumque, vero.
            </p>
          </div>
          <div className="postImage">
            <img src="/assets/post/1st post.jpg" alt="image" />
          </div>

          <div className="postReaction">
            <div className="leftSide">
              <div className="likes">
                <ThumbUp className="likeIcon" />
                12
              </div>
            </div>
            <div className="rightSide">
              <span> 45 comments</span>
              <span>5 shares</span>
            </div>
          </div>
          <hr />

          <div className="postReactionIcons">
            <div className="like items ">
              <ThumbUp className="reactionIcons" />
              <span> Like</span>
            </div>
            <div className="comment items">
              <i className="fa-regular fa-comment reactionIcons"></i>
              <span>Comment</span>
            </div>

            <div className="share items ">
              <i className="fa-solid fa-share reactionIcon"></i>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fbpost;
