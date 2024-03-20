import React from "react";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

export default function Like(props) {
  const writingId = props.writingId;
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
