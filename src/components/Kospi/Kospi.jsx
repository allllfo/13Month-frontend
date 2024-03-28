import React, { useEffect, useState } from "react";

import { getKospiPrices } from "~/lib/apis/kospi";

export default function Kospi(props) {
  const currentPeriod = props.currentPeriod;

  const [kospi, setKospi] = useState();

  useEffect(() => {
    const resp = getKospiPrices().then((resp) => {
      setKospi(resp[0].data);
    });
  }, []);

  if (kospi) {
    const kospiChange =
      (kospi[0].closePrice - kospi[currentPeriod + 1].closePrice) /
      kospi[currentPeriod + 1].closePrice;
    console.log(
      "kos: ",
      kospi[0].closePrice,
      kospi[currentPeriod + 1].closePrice,
      kospiChange
    );
  }

  return <div>Kospi</div>;
}
