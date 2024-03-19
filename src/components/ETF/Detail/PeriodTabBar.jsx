import React from "react";

export default function PeriodTabBar(props) {
  const setCurrentPeriod = props.setCurrentPeriod;
  const periods = props.periods;
  const currentPeriod = props.currentPeriod;

  return (
    <div className="flex text-center">
      {periods.map((ele, idx) => {
        let divClass = "w-1/" + periods.length + " m-1 rounded-md";

        if (idx === currentPeriod) {
          divClass += " bg-blue-200";
        } else {
          divClass += " bg-white";
        }

        return (
          <div
            key={ele}
            className={divClass}
            onClick={() => {
              setCurrentPeriod(idx);
            }}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
}
