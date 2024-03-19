import React, { useEffect, useState } from "react";

import PeriodTabBar from "../PeriodTabBar";

export default function DailyPrice(props) {
  const code = props.code;

  const [currentPeriod, setCurrentPeriod] = useState(0);
  const periods = ["1주", "1개월", "3개월", "6개월", "1년"];

  // 저장된 데이터 형식에 따라 다르게 짜야할 듯
  // 일단 일주일 불러오고 표시, 나머지 불러와서 저장. 다른 기간 누르면 해당 날짜까지 표시?
  // useEffect(() => {

  // }, [currentPeriod]);

  return (
    <div className="pt-4">
      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
        periods={periods}
      />
    </div>
  );
}
