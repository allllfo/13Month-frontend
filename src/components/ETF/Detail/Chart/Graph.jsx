import React, { useState } from "react";

import PeriodTabBar from "../PeriodTabBar";

export default function Graph(props) {
  const code = props.code;

  const [currentPeriod, setCurrentPeriod] = useState(0);
  const periods = ["1주", "1개월", "3개월", "6개월", "1년"];

  return (
    <div>
      <div className="w-full h-60 bg-gray-200">
        Chart Graph, currentPeriod: {periods[currentPeriod]}
      </div>

      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
        periods={periods}
      />
    </div>
  );
}
