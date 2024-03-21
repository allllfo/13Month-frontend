import React, { useEffect, useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";

import CommonInfo from "~/components/ETF/Detail/CommonInfo";

import Chart from "~/components/ETF/Detail/Chart/Chart";
import DailyPrice from "~/components/ETF/Detail/DailyPrice/DailyPrice";
import StockInfo from "~/components/ETF/Detail/StockInfo/StockInfo";
import Community from "~/components/ETF/Detail/Community/Community";
import { useParams } from "react-router";

import { getEtfInfo } from "~/lib/apis/etfDetail";

export default function etfDetailPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [stockInfo, setStockInfo] = useState();

  const { code } = useParams();

  const detailTabs = ["차트", "일별 시세", "종목 정보", "커뮤니티"];
  const detailComponents = [
    <Chart code={code} />,
    <DailyPrice code={code} />,
    <StockInfo code={code} stockInfo={stockInfo} />,
    <Community code={code} />,
  ];

  useEffect(() => {
    getEtfInfo(code).then((resp) => {
      setStockInfo(resp[0].data);
      console.log("resp: ", resp[0].data);
    });

    // 리덕스 userID 비교해서 좋아요 누른 ETF인지 확인, set
  }, []);

  return (
    <div>
      <TopBackBar />

      {stockInfo ? (
        <CommonInfo
          code={code}
          title={stockInfo.basicInfo.종목이름.split(" (")[0]}
          riskDegree={stockInfo.dangerDegree}
        />
      ) : (
        <></>
      )}

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {stockInfo ? detailComponents[currentTab] : <></>}
    </div>
  );
}
