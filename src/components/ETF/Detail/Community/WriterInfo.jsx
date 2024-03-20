import React from "react";

export default function WriterInfo(props) {
  const profileImageUrl = props.profileImageUrl;
  const nickname = props.nickname;

  return (
    <div className="flex items-center justify-start gap-2 mb-2">
      <img className="h-10 w-10 rounded-full" src={profileImageUrl}></img>
      <p className="text-md font-bold"> {nickname}</p>
    </div>
  );
}
