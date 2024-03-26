import React, { useEffect, useState } from "react";

import TopBackBar from "~/components/TopBackBar/TopBackBar";
import HotFund from "~/components/Fund/HotFund";
import DetailTabBar from "~/components/ETF/Detail/DetailTabBar";
import Funds from "~/components/Fund/Funds";

import { getAllFund } from "~/lib/apis/fund";
import { useSelector } from "react-redux";
import { findUserWithNickname } from "~/lib/apis/user";
import { getFundInfoWithList } from "~/lib/apis/fund";
import { getRising } from "~/lib/apis/rising";

export default function fundMainPage() {
  const userState = useSelector((state) => state.user13th);

  const [funds, setFunds] = useState([[], [], [], [], []]);
  const [currentTab, setCurrentTab] = useState(0);

  const [rising, setRising] = useState([]);
  const [include, setInclude] = useState([]);

  const profitPeriod = "3개월";

  // 전체, 거래량, 규모
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

      let allStocks = [];
      let allResults = [];
      getRising()
        .then((rising) => {
          rising.forEach((stock) => {
            const name = stock.stbd_nm;
            console.log("name: ", name);
            let results = [];

            newFunds[0].map((ele, idx) => {
              const portfolio = ele.portfolio["보유종목 Top10"];

              portfolio.some((elem) => {
                if (elem[0] === name) {
                  results.push(ele);
                  return;
                }
              });
            });

            if (results.length > 0) {
              allStocks.push(name);
              allResults.push(results);
            }
          });
        })
        .then(() => {
          console.log("total: ", allStocks);
          console.log("total: ", allResults);
          setRising(allStocks);
          setInclude(allResults);
        });

      return newFunds;
    });
  };

  const detailTabs = ["전체", "수익률", "규모", "관심", "최근"];
  useEffect(() => {
    getAllFund().then((funds) => {
      updateFunds(funds);
    });
  }, []);

  // liked
  useEffect(() => {
    if (currentTab === 3) {
      findUserWithNickname(userState.nickname)
        .then((user) => {
          return user.likedFund;
        })
        .then((likedFund) => {
          console.log("liked: ", likedFund);
          return getFundInfoWithList(likedFund);
        })
        .then((likedFundInfo) => {
          // console.log("likedFund: ", likedFundInfo);

          setFunds((prev) => {
            let updatedFunds = [...prev];
            updatedFunds[3] = likedFundInfo;
            return updatedFunds;
          });
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  }, [currentTab]);
  return (
    <div>
      <TopBackBar />

      {/* 핫이슈 목록 받기로 변경 */}
      {rising.length > 0 ? (
        <HotFund rising={rising} include={include} />
      ) : (
        <></>
      )}

      <DetailTabBar
        detailTabs={detailTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {funds ? (
        <Funds funds={funds[currentTab]} currentTab={currentTab} />
      ) : (
        <></>
      )}
    </div>
  );
}
