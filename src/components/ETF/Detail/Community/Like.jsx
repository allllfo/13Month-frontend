import React from "react";

import blankLikeIcon from "~/assets/images/community/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/community/redLikeIcon.png";
import commentIcon from "~/assets/images/community/commentIcon.png";

export default function Like(props) {
  const totalLike = props.totalLike;
  const setTotalLike = props.setTotalLike;
  const isLiked = props.isLiked;
  const setIsLiked = props.setIsLiked;

  let icon = blankLikeIcon;
  if (isLiked) {
    icon = redLikeIcon;
  }

  const clickLikeBtn = () => {
    if (isLiked) {
      setIsLiked(false);
      setTotalLike(totalLike - 1);

      // like - 1 요청

      return;
    }
    setIsLiked(true);
    setTotalLike(totalLike + 1);

    // like + 1 요청
  };

  return (
    <div className="flex gap-1 items-center">
      <img src={icon} className="h-8" onClick={() => clickLikeBtn()} />
      <p>{totalLike}</p>
    </div>
  );
}
