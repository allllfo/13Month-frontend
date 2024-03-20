import React from "react";

import WriterInfo from "./WriterInfo";

export default function Writing(props) {
  const writing = props.writing;

  return (
    <div className=" mt-3 border p-2 rounded-md">
      <WriterInfo
        nickname={writing.nickname}
        profileImageUrl={writing.profileImageUrl}
      />
    </div>
  );
}
