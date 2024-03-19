import React, { useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";

import CommonInfo from "~/components/ETF/Detail/CommonInfo";

import Chart from "~/components/ETF/Detail/Chart/Chart";
import DailyPrice from "~/components/ETF/Detail/DailyPrice/DailyPrice";
import DetailInfo from "~/components/ETF/Detail/DetailInfo/DetailInfo";
import Community from "~/components/ETF/Detail/Community/Community";

export default function etfDetailPage(props) {
  const [currentTab, setCurrentTab] = useState(0);

  // const code = props.code;
  // test
  const code = 47531;

  const detailTabs = ["차트", "일별 시세", "종목 정보", "커뮤니티"];
  const detailComponents = [
    <Chart code={code} />,
    <DailyPrice code={code} />,
    <DetailInfo code={code} />,
    <Community code={code} />,
  ];

  return (
    <div>
      <TopBackBar />

      <CommonInfo code={code} />

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {detailComponents[currentTab]}
    </div>
  );
}
