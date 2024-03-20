import React from "react";
import { Card, Tabs } from "flowbite-react";
import ETFDangerFilter from "./ETFDangerFilter";
import ETFAssetFilter from "./ETFAssetFilter";
import ETFChart from "./ETFChart";
const ETFMain = () => {
  return (
    <div className="bg-blue-100">
      <div className="bg-white mt-28 text-3xl font-extrabold">
        <p className="ml-1">인기 종목 포함 ETF</p>
      </div>

      <div className="flex flex-row mt-3 font-medium text-lg">
        <p className="font-bold mr-1 ml-2">신한금융지주</p> 포함 ETF
      </div>
      <Card className="max-w-sm mb-4">
        {" "}
        {/* Adjust the margin as needed */}
        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
          SOL 미국S&P500
        </h5>
        <ETFChart />
      </Card>

      <div className="bg-white">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="테마별" className="bg-blue-100">
            <div className="mb-4">
              <h1 className="text-center font-bold m  ">유형</h1>
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <h1 className="text-center font-bold">위험도</h1>
              <ETFDangerFilter />
            </div>

            <span className="font-medium text-gray-800 dark:text-white">
              Profile associated content
            </span>

            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="거래량">
            <div className="mb-4">
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="시가총액">
            <div className="mb-4">
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Settings associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="관심">
            <div className="mb-4">
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
          <Tabs.Item title="최근">
            <div className="mb-4">
              <ETFAssetFilter />
            </div>
            <div className="mb-4">
              <ETFDangerFilter />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts associated content
            </span>
            {/* ... other content ... */}
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default ETFMain;
