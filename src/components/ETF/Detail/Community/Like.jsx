import React from "react";
import { useSelector } from "react-redux";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

import { likeComment, dislikeComment } from "~/lib/apis/comment";

export default function Like(props) {
  const commentId = props.commentId;
  const totalLike = props.totalLike;
  const setTotalLike = props.setTotalLike;
  const isLiked = props.isLiked;
  const setIsLiked = props.setIsLiked;

  const userState = useSelector((state) => state.user13th);

  let icon = blankLikeIcon;
  if (isLiked) {
    icon = redLikeIcon;
  }

  const clickLikeBtn = () => {
    if (isLiked) {
      setIsLiked(false);
      setTotalLike(totalLike - 1);

      dislikeComment(commentId, userState.userId);

      return;
    }
    setIsLiked(true);
    setTotalLike(totalLike + 1);

    // like + 1 요청
    likeComment(commentId, userState.userId);
  };

  return (
    <div
      className="flex gap-1 items-center"
      style={{ cursor: "pointer" }}
      onClick={() => clickLikeBtn()}
    >
      <img src={icon} className="h-8" />
      <p>{totalLike}</p>
    </div>
  );
}
