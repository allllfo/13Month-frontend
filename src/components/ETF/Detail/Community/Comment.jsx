import React from "react";

import blankcommentIcon from "~/assets/images/detail/blankCommentIcon.png";
import graycommentIcon from "~/assets/images/detail/grayCommentIcon.png";

export default function Comment(props) {
  const openComment = props.openComment;
  const setOpenComment = props.setOpenComment;
  const totalComment = props.totalComment;

  let icon = blankcommentIcon;
  if (openComment) {
    icon = graycommentIcon;
  }

  const clickCommentBtn = () => {
    if (openComment) {
      setOpenComment(false);
      return;
    }
    setOpenComment(true);
  };

  return (
    <div className="flex items-center gap-1">
      <img src={icon} className="h-8" onClick={() => clickCommentBtn()} />
      <p>{totalComment}</p>
    </div>
  );
}
