import React, { useState } from "react";

import Input from "./Input";
import Writing from "./Writing";

export default function Community(props) {
  const code = props.code;

  // sample
  const writings = [
    {
      nickname: "futereKim",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTRfMzEg/MDAxNjE4MzkzNzYyMTI3.2O_46TmKTYGbXMeu-W_9wdfAAw-tYLPzzRO2ZhB7hesg.iBmAqi17fck3tC4907gGaFIp1IalksYgIGCdjhhSuzAg.JPEG.eu2/1618393754909.jpg?type=w800",
      content: "I am the king",
      like: 1,
      replyIdLength: 4,
    },
    {
      nickname: "U.Kim",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTRfMTUw/MDAxNjE4MzkzNzYyODU4.pwJ6WFsf1yIkjMMN4Bt6N0Fid21WFXEV2PVPeGwIB9Yg.kNInl65tKC8b_b3il7Vq3wpATgAIgPEWtjMGMQEfXIgg.JPEG.eu2/1618393755097.jpg?type=w800",
      content: "I am the king",
      like: 2,
      replyIdLength: 8,
    },
    {
      nickname: "Woosung",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTdfMjM0/MDAxNjE4NjM2NjA1NTcz.TPSdbBWljVJt3dcDzCflQ815kGru3NZXcq2yTG0kNdkg.ujJcvicJPoXptMZa687IFOwpwF74v_bahIerSH0L6Ocg.JPEG.eu2/1618636598825.jpg?type=w800",
      content: "I am sick...",
      like: 20,
      replyIdLength: 2,
    },
  ];

  return (
    <div className="pt-4">
      <p className="text-md m-1">
        <span className="font-bold">{writings.length}</span>개의 댓글
      </p>
      <Input code={code} />

      {writings.map((ele, idx) => {
        return <Writing key={idx} writing={ele} />;
      })}
    </div>
  );
}
