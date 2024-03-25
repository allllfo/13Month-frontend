import React from "react";

import Risk from "../ETF/Risk/Risk";

import blankLikeIcon from "~/assets/images/detail/blankLikeIcon.png";
import redLikeIcon from "~/assets/images/detail/redLikeIcon.png";

export default function LongFundCard(props) {
  const title = props.title;
  const riskDegree = parseInt(props.riskDegree);
  const profit = props.profit;
  const size = props.size;

  return (
    <div>
      <Risk riskDegree={riskDegree} />
      <p>{title}</p>
      <p>3개월 수익률: {profit["3개월"]}</p>
      <p>규모: {size}</p>
    </div>
  );
}
