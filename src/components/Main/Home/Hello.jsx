import React from "react";
import { useSelector } from "react-redux";

export default function Hello(props) {
  const userState = useSelector((state) => state.user13th);
  const setCurrentTab = props.setCurrentTab;

  return (
    <div className="flex mt-6">
      <div
        className="mr-6 ml-auto flex items-center justify-start gap-2"
        style={{ cursor: "pointer" }}
        onClick={() => setCurrentTab(3)}
      >
        <img
          className="h-8 w-8 rounded-full"
          src={userState.profileImageUrl}
        ></img>
        <p className="text-md"> {userState.nickname}님, 좋은 하루 되세요!</p>
      </div>
    </div>
  );
}
