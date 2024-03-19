import React from "react";

import Graph from "./Graph";

export default function Chart(props) {
  const code = props.code;

  return (
    <div className="pt-2">
      <Graph code={code} />
    </div>
  );
}
