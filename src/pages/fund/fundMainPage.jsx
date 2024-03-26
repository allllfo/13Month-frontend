import React, { useEffect, useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import HotFund from "~/components/Fund/HotFund";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";
import Funds from "~/components/Fund/Funds";

import { getAllFund } from "~/lib/apis/fund";
import { useSelector } from "react-redux";
import { findUserWithNickname } from "~/lib/apis/user";

export default function fundMainPage() {
  const userState = useSelector((state) => state.user13th);

  const [funds, setFunds] = useState([[], [], [], [], []]);
  const [currentTab, setCurrentTab] = useState(0);

  const profitPeriod = "3개월";

  const updateFunds = (resp) => {
    setFunds(() => {
      const newFunds = [];
      newFunds[0] = resp;

      newFunds[1] = resp
        .slice()
        .sort(
          (a, b) =>
            parseFloat(a.profit.표[{ profitPeriod }]) -
            parseFloat(b.profit.표[{ profitPeriod }])
        );

      newFunds[2] = resp
        .slice()
        .sort(
          (a, b) =>
            parseFloat(b.data.규모.slice(0, -2)) -
            parseFloat(a.data.규모.slice(0, -2))
        );

      newFunds[3] = [];

      newFunds[4] = [];

      return newFunds;
    });
  };

  const addItemToArray = (idx, item) => {
    setFunds((prevFunds) => {
      const newFunds = [...prevFunds];
      newFunds[idx].push(item);
      return newFunds;
    });
  };

  const removeItemFromArray = (idx, deleteItemCode) => {
    setFunds((prevFunds) => {
      const newFunds = [...prevFunds];
      newFunds[idx] = newFunds[idx].filter(
        (item) => item[code] !== deleteItemCode
      );
      return newFunds;
    });
  };

  const detailTabs = ["전체", "수익률", "규모", "관심", "최근"];
  useEffect(() => {
    getAllFund().then((resp) => {
      updateFunds(resp);
    });
  }, []);

  return (
    <div>
      <TopBackBar />

      <HotFund />

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {funds ? (
        <Funds
          funds={funds[currentTab]}
          addItemToArray={addItemToArray}
          removeItemFromArray={removeItemFromArray}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
