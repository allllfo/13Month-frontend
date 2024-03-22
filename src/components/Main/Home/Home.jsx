import React from "react";

import Services from "./Services";
import Hello from "./Hello";

export default function TaxAdjustment(props) {
  const setCurrentTab = props.setCurrentTab;

  return (
    <div>
      <Hello setCurrentTab={setCurrentTab} />
      <Services />
    </div>
  );
}
