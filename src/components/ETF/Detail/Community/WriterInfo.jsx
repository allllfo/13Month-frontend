import React from "react";
import { useSelector } from "react-redux";

export default function WriterInfo(props) {
  const profileImageUrl = props.profileImageUrl;
  const nickname = props.nickname;
  const userState = useSelector((state) => state.user13th);

  return (
    <div className="flex justify-between mb-2">
      <div className="flex items-center  gap-2 ">
        <img className="h-10 w-10 rounded-full" src={profileImageUrl}></img>
        <p className="text-md font-bold"> {nickname}</p>
      </div>
    </div>
  );
}
