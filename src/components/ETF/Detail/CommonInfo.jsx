import React from "react";

import Risk from "~/components/ETF/Risk/Risk";

import heart from "~/assets/images/detail/heart.png";
import heartRed from "~/assets/images/detail/heartRed.png";

export default function CommonInfo(props) {
  const code = props.code;
  let heartImg = heart;

  // get info
  const title = "SOL 반도체후공정";
  const description = "국내 반도체 후공정 핵심 기업에 투자하는 ETF";
  const dangerous = 3;
  const isLiked = false;
  const riskDegree = 2;

  if (isLiked === true) {
    heartImg = heartRed;
  }

  return (
    <div className="ml-2 mt-2">
      <Risk riskDegree={riskDegree} />

      <div className="flex justify-between">
        <div className="flex items-center left-div">
          <p className="text-3xl mr-3 font-bold">{title}</p>
          <p className="text-xl text-gray-500 font-medium">{code}</p>
        </div>

        <div className="right-div">
          <img src={heartImg} className="h-8" />
        </div>
      </div>

      <p className="text-gray-900 mt-2 text-lg">{description}</p>
    </div>
  );
}
