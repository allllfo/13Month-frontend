import React, { useEffect, useState } from "react";

import Risk from "../ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";
import { findUserWithNickname } from "~/lib/apis/user";
import { useSelector } from "react-redux";

export default function LongFundCard(props) {
  const userState = useSelector((state) => state.user13th);
  const title = props.title;
  const riskDegree = parseInt(props.riskDegree);
  const profit = props.profit;
  const size = props.size;
  const code = props.code;

  const [isLiked, setIsLiked] = useState(false);

  let heartImg = blankLikeIcon;
  if (isLiked) {
    heartImg = redLikeIcon;
  }

  useEffect(() => {
    findUserWithNickname(userState.nickname).then((resp) => {
      if (resp.likedFund.includes(code)) {
        setIsLiked(true);
      }
    });
  }, []);

  const clickLike = () => {
    if (isLiked) {
      setIsLiked(false);
      pullLikedFund(userState.userId, code);
      return;
    }

    setIsLiked(true);
    pushLikedFund(userState.userId, code);
  };

  return (
    <div className="border-t pt-3 pb-3">
      <Risk riskDegree={riskDegree} />
      <div>
        <p className="text-xl mt-2 font-semibold">{title}</p>
        <p className="text-lg">3개월 수익률: {profit["3개월"]}</p>
        <p>규모: {size}</p>
      </div>

      <div></div>
    </div>
  );
}
