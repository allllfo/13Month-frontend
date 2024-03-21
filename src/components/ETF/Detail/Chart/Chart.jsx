import React, { useEffect, useState } from "react";

import Graph from "./Graph";
import PeriodTabBar from "../PeriodTabBar";

import { getEtfChartData } from "~/lib/apis/etfDetail";

export default function Chart(props) {
  const code = props.code;

  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getEtfChartData(code).then((resp) => {
      const chartResp = resp[0].chart.output2;
      setChartData(chartResp);
    });
  }, []);

  return (
    <div className="pt-4">
      <Graph code={code} currentPeriod={currentPeriod} chartData={chartData} />

      <PeriodTabBar
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
      />
    </div>
  );
}
