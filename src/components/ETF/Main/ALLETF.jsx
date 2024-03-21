import React from "react";
import { Card } from "flowbite-react";
import MyResponsiveLine from "~/components/ETF/Main/MyResponsiveLine";
import riskIconImg1 from "~/assets/images/riskIcons/riskIcon1.png";

const ALLETF = () => {
  const data = [
    {
      id: "series1", // 시리즈 ID

      data: [
        {
          x: "1",
          y: 55,
        },
        {
          x: "2",
          y: 262,
        },
        {
          x: "3",
          y: 73,
        },
        {
          x: "4",
          y: 77,
        },
        {
          x: "5",
          y: 104,
        },
        {
          x: "6",
          y: 217,
        },
        {
          x: "7",
          y: 85,
        },
        {
          x: "8",
          y: 9,
        },
        {
          x: "9",
          y: 203,
        },
        {
          x: "10",
          y: 104,
        },
      ],
    },
  ];

  return (
    <Card
      className="m-5"
      bodyStyle={{ padding: "0" }}
      theme={{
        root: {
          children: "p-3",
        },
      }}
    >
      <div className="flex flex-row">
        <div className="relative h-8 w-24">
          <MyResponsiveLine data={data} />
        </div>
        <div className="flex flex-col ml-3">
          <div>
            <img src={riskIconImg1} />
          </div>
          <div className="font-bold text-sm">SOL 반도체후공정</div>
        </div>
      </div>
    </Card>
  );
};

export default ALLETF;
