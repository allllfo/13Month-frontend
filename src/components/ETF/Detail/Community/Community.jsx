import React, { useState } from "react";

import Input from "./Input";
import Writing from "./Writing";

export default function Community(props) {
  const code = props.code;

  const [isWriting, setIsWriting] = useState(false);

  // sample
  const writings = [
    {
      nickname: "futereKim",
      content: "I am the king",
      like: 1,
      replyIdLength: 4,
    },
    {
      nickname: "U.Kim",
      content: "I am the king",
      like: 2,
      replyIdLength: 8,
    },
    {
      nickname: "Woosung",
      content: "I am sick...",
      like: 20,
      replyIdLength: 2,
    },
  ];

  return (
    <div className="pt-4">
      <Input code={code} />
    </div>
  );
}
