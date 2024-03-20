import React from "react";

import BackImg from "~/assets/images/backBarIcons/backIcon.png";

export default function TopBackBar() {
  return (
    <div className="pt-2 pb-2 bg-white" style={{ width: "400px" }}>
      <img src={BackImg} className="h-8"></img>
    </div>
  );
}
