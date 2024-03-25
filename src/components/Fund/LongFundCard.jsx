import React, { useEffect, useState } from "react";

import Risk from "../ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";
import { findUserWithNickname } from "~/lib/apis/user";
import { useSelector } from "react-redux";
import { pushLikedFund, pullLikedFund } from "~/lib/apis/user";
import { useNavigate } from "react-router";

export default function LongFundCard(props) {
  const userState = useSelector((state) => state.user13th);
  const title = props.title;
  const riskDegree = parseInt(props.riskDegree);
  const profit = props.profit;
  const size = props.size;
  const code = props.code;

  const profitPeriod = "3개월";

  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  let heartImg = blankLikeIcon;
  if (isLiked) {
    heartImg = redLikeIcon;
  }

  let profitStyle = "font-bold text-xl";
  if (profit[profitPeriod][0] === "-") {
    profitStyle += " text-blue-500";
  } else {
    profitStyle += " text-red-500";
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
    <div
      className="border-t pt-3 pb-3 flex justify-between"
      onClick={() => navigate("/fund/detail/" + code)}
    >
      <div>
        <Risk riskDegree={riskDegree} />
        <p className="text-lg mt-2 font-semibold">{title}</p>
      </div>

      <div className="w-16 mr-3">
        <div className="flex justify-end mb-8">
          <img
            src={heartImg}
            className="h-8"
            onClick={() => {
              clickLike();
            }}
          />
        </div>

        <div>
          <p className="text-sm text-right">{profitPeriod}</p>
          <p className={profitStyle}>{profit[profitPeriod]}%</p>
        </div>
      </div>
    </div>
  );
}
