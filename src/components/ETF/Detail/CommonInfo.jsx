import React from "react";

import Dangerous from "../Dangerous/Dangerous";

export default function CommonInfo(props) {
  const code = props.code;

  // get info
  const title = "title";
  const description = "description";
  const dangerous = 3;

  return (
    <div>
      <div>
        <p className="text-3xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
