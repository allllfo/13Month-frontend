import React, { useEffect, useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import HotFund from "~/components/Fund/HotFund";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";
import Funds from "~/components/Fund/Funds";

import { getAllFund } from "~/lib/apis/fund";

export default function fundMainPage() {
  const [funds, setFunds] = useState([[], [], [], [], []]);
  const [currentTab, setCurrentTab] = useState(0);

  const updateFunds = (index, newArray) => {
    setFunds((prevState) => {
      const newFunds = [...prevState];
      newFunds[index] = newArray;
      return newFunds;
    });
  };

  const detailTabs = ["전체", "수익률", "규모", "관심", "최근"];
  useEffect(() => {
    getAllFund().then((resp) => {
      console.log("resp: ", resp);
      updateFunds(0, resp);
    });
  }, []);

  console.log("funds: ", funds[currentTab]);

  return (
    <div>
      <TopBackBar />

      <HotFund />

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {funds ? <Funds funds={funds[currentTab]} /> : <></>}
    </div>
  );
}
