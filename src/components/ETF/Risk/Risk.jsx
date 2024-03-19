import React from "react";

import RiskIcon1 from "~/assets/images/riskIcons/riskIcon1.png";
import RiskIcon2 from "~/assets/images/riskIcons/riskIcon2.png";
import RiskIcon3 from "~/assets/images/riskIcons/riskIcon3.png";
import RiskIcon4 from "~/assets/images/riskIcons/riskIcon4.png";
import RiskIcon5 from "~/assets/images/riskIcons/riskIcon5.png";
import RiskIcon6 from "~/assets/images/riskIcons/riskIcon6.png";

export default function Risk(props) {
  const riskDegree = props.riskDegree;

  const icons = [
    "",
    RiskIcon1,
    RiskIcon2,
    RiskIcon3,
    RiskIcon4,
    RiskIcon5,
    RiskIcon6,
  ];
  const titles = [
    "",
    "매우 높은 위험",
    "높은 위험",
    "다소 높은 위험",
    "보통 위험",
    "낮은 위험",
    "매우 낮은 위험",
  ];

  const colors = [
    "",
    "#DD2F52",
    "#F25801",
    "#FFC107",
    "#80C14D",
    "#0C86BF",
    "#00448F",
  ];

  let divClass = "flex items-center border-2 h-7 rounded-md p-1";

  if (riskDegree === 1 || riskDegree === 3 || riskDegree === 6) {
    divClass += " w-28";
  } else {
    divClass += " w-24";
  }

  return (
    <div className={divClass} style={{ borderColor: colors[riskDegree] }}>
      <img src={icons[riskDegree]} className="w-5" />
      <p
        className="text-xs ml-2 font-bold"
        style={{ color: colors[riskDegree] }}
      >
        {titles[riskDegree]}
      </p>
    </div>
  );
}
