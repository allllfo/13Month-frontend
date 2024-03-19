import React from "react";

import Detail from "./Detail";
import Prossesion from "./Prossesion";

export default function StockInfo(props) {
  const code = props.code;

  return (
    <div>
      <Detail code={code} />

      <Prossesion code={code} />
    </div>
  );
}
