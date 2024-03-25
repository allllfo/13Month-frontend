import React from "react";

import Risk from "../ETF/Risk/Risk";

export default function LongFundCard(props) {
  const title = props.title;
  const riskDegree = parseInt(props.riskDegree);
  const profit = props.profit;

  return (
    <div>
      <Risk riskDegree={riskDegree} />
      <p>{title}</p>
      <p>{profit["3개월"]}</p>
    </div>
  );
}
