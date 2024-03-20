import React from "react";

import commentIcon from "~/assets/images/detail/commentIcon.png";

export default function Comment(props) {
  const openComment = props.openComment;
  const setOpenComment = props.setOpenComment;
  const totalComment = props.totalComment;

  const clickCommentBtn = () => {
    if (openComment) {
      setOpenComment(false);
      return;
    }
    setOpenComment(true);
  };

  return (
    <div className="flex items-center gap-1">
      <img
        src={commentIcon}
        className="h-8"
        onClick={() => clickCommentBtn()}
      />
      <p>{totalComment}</p>
    </div>
  );
}
