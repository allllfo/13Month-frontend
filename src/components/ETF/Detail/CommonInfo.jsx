import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Risk from "~/components/ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

export default function CommonInfo(props) {
  const userState = useSelector((state) => state.user13th);
  const code = props.code;

  const [isLiked, setIsLiked] = useState(false);
  let heartImg = blankLikeIcon;
  if (isLiked) {
    heartImg = redLikeIcon;
  }
  // get info
  const title = "SOL 반도체후공정";
  const description = "국내 반도체 후공정 핵심 기업에 투자하는 ETF";
  const riskDegree = 1;

  useEffect(() => {
    // 리덕스 userID 비교해서 좋아요 누른 ETF인지 확인, set
  });

  const clickEtfLike = () => {
    console.log("click");
    if (isLiked) {
      setIsLiked(false);
      // user 좋아요 ETF 목록에 저장
      return;
    }
    setIsLiked(true);
    // user 좋아요 ETF 목록에서 제외
  };

  return (
    <div className="ml-2 mt-2 mb-8">
      <Risk riskDegree={riskDegree} />

      <div className="flex justify-between">
        <div className="flex items-center left-div">
          <p className="text-3xl mr-3 font-bold">{title}</p>
          <p className="text-xl text-gray-500 font-medium">{code}</p>
        </div>

        <div className="right-div">
          <img
            src={heartImg}
            className="h-8"
            onClick={() => {
              clickEtfLike();
            }}
          />
        </div>
      </div>

      <p className="text-gray-900 mt-2 text-lg">{description}</p>
    </div>
  );
}
