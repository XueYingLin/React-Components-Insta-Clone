// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.propsPassFromParent.likes);
  // console.log("Parent props", props);

  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPassFromParent.username}
        thumbnailUrl={
          props.propsPassFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPassFromParent.imageUrl}
        />
      </div>
      <LikeSection likes={props.propsPassFromParent.likes} />
      <CommentSection
        postImage={props.propsPassFromParent.imageUrl}
       
        comments={props.propsPassFromParent.comments}
      />
    </div>
  );
};

export default Post;


