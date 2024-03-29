import React from "react";

import FindOutPage from "~/pages/findout/findout";
import Tip from "~/components/Tip/Tip";

export default function FindOut() {
  return (
    <div className="mt-6">
      <FindOutPage />

      <div className="mt-6 mb-8">
        <Tip />
      </div>
    </div>
  );
}
