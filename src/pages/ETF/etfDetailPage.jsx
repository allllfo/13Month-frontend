import React from "react";
import { useLocation } from "react-router";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import CommonInfo from "~/components/ETF/Detail/CommonInfo";

import Chart from "~/components/ETF/Detail/Chart/Chart";
import DailyPrice from "~/components/ETF/Detail/DailyPrice/DailyPrice";
import DetailInfo from "~/components/ETF/Detail/DetailInfo/DetailInfo";
import Community from "~/components/ETF/Detail/Community/Community";

export default function etfDetailPage(props) {
  // const code = props.code;
  const detailTabs = ["차트", "일별 시세", "종목 정보", "커뮤니티"];
  const detailComponents = [
    <Chart />,
    <DailyPrice />,
    <DetailInfo />,
    <Community />,
  ];

  // test
  const code = 47531;

  return (
    <div>
      <TopBackBar></TopBackBar>

      <div>etfDetailPage</div>
    </div>
  );
}
