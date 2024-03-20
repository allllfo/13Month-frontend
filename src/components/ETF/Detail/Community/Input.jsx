import React, { useState } from "react";
import { useSelector } from "react-redux";

import WriterInfo from "./WriterInfo";

export default function Input(props) {
  const code = props.code;
  const userState = useSelector((state) => state.user13th);

  const [content, setContent] = useState("");

  const clickPublishBtn = () => {
    const newWriting = {
      code: code,
      nickname: userState.nickname,
      profileImageUrl: userState.profileImageUrl,
      content: content,
    };

    console.log("click: ", newWriting);

    // writing 등록 API 연결
  };

  return (
    <div className="border p-2 rounded-md">
      <WriterInfo
        nickname={userState.nickname}
        profileImageUrl={userState.profileImageUrl}
      />

      <textarea
        className="w-full h-16 p-1 mb-2 text-top rounded-md border-gray-200"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <div className="flex justify-end border-t">
        <button
          className="bg-blue-500 text-white text-sm w-20 h-8 rounded-md font-semibold mt-2"
          onClick={() => {
            clickPublishBtn();
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}
