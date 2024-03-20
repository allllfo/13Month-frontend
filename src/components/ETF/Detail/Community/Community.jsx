import React, { useState } from "react";

import Input from "./Input";
import Writing from "./Writing";

export default function Community(props) {
  const code = props.code;

  // sample
  const writings = [
    {
      id: "1",
      nickname: "futureKim",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTRfMzEg/MDAxNjE4MzkzNzYyMTI3.2O_46TmKTYGbXMeu-W_9wdfAAw-tYLPzzRO2ZhB7hesg.iBmAqi17fck3tC4907gGaFIp1IalksYgIGCdjhhSuzAg.JPEG.eu2/1618393754909.jpg?type=w800",
      content:
        "I am the king, I am the king, I am the king, I am the king, I am the king, I am the king, I am the king, I am the king, ",
      likeIds: ["65f3f57835e5dc8dcdb56c7e"],
      replyIds: [
        {
          id: "3",
          nickname: "Woosung",
          profileImageUrl:
            "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTdfMjM0/MDAxNjE4NjM2NjA1NTcz.TPSdbBWljVJt3dcDzCflQ815kGru3NZXcq2yTG0kNdkg.ujJcvicJPoXptMZa687IFOwpwF74v_bahIerSH0L6Ocg.JPEG.eu2/1618636598825.jpg?type=w800",
          content: "I am sick...",
          likeIds: [],
          replyIdLength: 2,
          createdDate: "2024.03.17",
        },
      ],
      createdDate: "2024.03.20",
      depth: 0,
    },
    {
      id: "2",
      nickname: "U.Kim",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTRfMTUw/MDAxNjE4MzkzNzYyODU4.pwJ6WFsf1yIkjMMN4Bt6N0Fid21WFXEV2PVPeGwIB9Yg.kNInl65tKC8b_b3il7Vq3wpATgAIgPEWtjMGMQEfXIgg.JPEG.eu2/1618393755097.jpg?type=w800",
      content: "I am the G.O.D",
      likeIds: [],
      replyIds: [
        {
          id: "3",
          nickname: "Woosung",
          profileImageUrl:
            "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTdfMjM0/MDAxNjE4NjM2NjA1NTcz.TPSdbBWljVJt3dcDzCflQ815kGru3NZXcq2yTG0kNdkg.ujJcvicJPoXptMZa687IFOwpwF74v_bahIerSH0L6Ocg.JPEG.eu2/1618636598825.jpg?type=w800",
          content: "I am sick...",
          likeIds: [],
          replyIdLength: 2,
          createdDate: "2024.03.17",
        },
        {
          id: "3",
          nickname: "Woosung222",
          profileImageUrl:
            "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTdfMjM0/MDAxNjE4NjM2NjA1NTcz.TPSdbBWljVJt3dcDzCflQ815kGru3NZXcq2yTG0kNdkg.ujJcvicJPoXptMZa687IFOwpwF74v_bahIerSH0L6Ocg.JPEG.eu2/1618636598825.jpg?type=w800",
          content: "I am sick...",
          likeIds: [],
          replyIdLength: 2,
          createdDate: "2024.03.17",
        },
      ],
      createdDate: "2024.03.18",
    },
    {
      id: "3",
      nickname: "Woosung",
      profileImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTdfMjM0/MDAxNjE4NjM2NjA1NTcz.TPSdbBWljVJt3dcDzCflQ815kGru3NZXcq2yTG0kNdkg.ujJcvicJPoXptMZa687IFOwpwF74v_bahIerSH0L6Ocg.JPEG.eu2/1618636598825.jpg?type=w800",
      content: "I am sick...",
      likeIds: [],
      replyIds: [],
      createdDate: "2024.03.17",
    },
    {
      id: "4",
      nickname: "stt",
      profileImageUrl:
        "data:image/jpeg;base64,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",
      content: "So tired....",
      likeIds: [],
      replyIds: [],
      createdDate: "2024.03.17",
    },
  ];

  return (
    <div className="pt-4 mb-20">
      <p className="text-md m-1">
        <span className="font-bold">{writings.length}</span>개의 댓글
      </p>
      <Input code={code} depth={0} />

      {writings.map((ele, idx) => {
        return <Writing key={idx} writing={ele} code={code} />;
      })}
    </div>
  );
}
