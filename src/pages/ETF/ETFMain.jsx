import React from "react";
import Chart from "react-apexcharts";
import { Card, Button, Tabs } from "flowbite-react";
import ETFFilter from "./ETFFilter";

const ETFMain = () => {
  return (
    <>
      <div>인기 종목 포함 ETF</div>

      <div>
        <div>신한금융지수 포함 ETF</div>
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            SOL 미국S&P500
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400"></p>
        </Card>
      </div>

      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="테마별">
          <ETFFilter />
          <span className="font-medium text-gray-800 dark:text-white">
            Profile associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="거래량">
          <ETFFilter />
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="시가총액">
          <ETFFilter />
          <span className="font-medium text-gray-800 dark:text-white">
            Settings associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="관심">
          <ETFFilter />
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="최근">
          <ETFFilter />
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default ETFMain;
