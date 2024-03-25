import React, { useEffect, useState } from "react";

import { getAllFund } from "~/lib/apis/fund";

export default function fundMainPage() {
  const [funds, setFunds] = useState();

  useEffect(() => {
    getAllFund().then((resp) => {
      console.log(resp);
      setFunds(resp);
    });
  }, []);
  return <div>fundMainPage</div>;
}
