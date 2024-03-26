import React, { useEffect } from "react";

import SmallFundCard from "./SmallFundCard";

export default function HotFund(props) {
  const funds = props.funds;

  useEffect(() => {
    console.log("funds: ", funds);
  }, []);

  return (
    <div className="bg-sky-50 pt-4 pb-4">
      <div>
        <p className="text-lg ml-4 mb-1">
          <span className="font-bold">신한지주</span> 포함 펀드
        </p>
      </div>

      <div className="flex overflow-x-auto h-40">
        {funds.map((ele, idx) => (
          <SmallFundCard key={idx} fund={ele} />
        ))}
      </div>
    </div>
  );
}
