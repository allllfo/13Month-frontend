import React from "react";

import { ResponsivePie } from "@nivo/pie";

export default function Prossesion(props) {
  const ratio = props.ratio;

  const data = [];

  for (let i = 0; i < Math.min(10, ratio.length); i++) {
    const ele = ratio[i];
    const formattedEle = {
      id: ele.companyName,
      value: parseFloat(ele.percentage.replace("%", "")),
    };

    data.push(formattedEle);
  }

  return (
    <div className="mb-16">
      <p className="font-bold text-2xl">보유비중 TOP 10</p>

      <div className="w-full h-96">
        <ResponsivePie
          data={data}
          tooltip={(point) => {
            const id = point.datum.data.id;
            const value = point.datum.data.value;
            const color = point.datum.color;
            return (
              <div
                className="bg-white border rounded-md text-xs p-1 text-center"
                style={{ borderColor: color }}
              >
                <p className="text-xs">{id}</p>
                <p className="text-sm font-bold">{value}%</p>
              </div>
            );
          }}
          arcLabel={(item) => `${item.value}%`}
          margin={{ top: 20, right: 70, bottom: 80, left: 70 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "accent" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsStraightLength={6}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLinkLabelsDiagonalLength={6}
          arcLinkLabelsTextOffset={2}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
