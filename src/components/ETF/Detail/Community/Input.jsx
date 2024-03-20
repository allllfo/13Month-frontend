import React from "react";
import { useSelector } from "react-redux";

export default function Input(props) {
  const code = props.code;
  const userState = useSelector((state) => state.user13th);

  return (
    <div className="border p-2 rounded-md">
      <div className="flex items-center justify-start gap-2 mb-2">
        <img className="h-6 rounded-full" src={userState.profileImageUrl}></img>
        <p className="text-md font-bold"> {userState.nickname}</p>
      </div>
      <textarea className="w-full h-16 p-1 mb-2 text-top rounded-md border-gray-200" />
      <div className="flex justify-end border-t">
        <button className="bg-blue-500 text-white text-sm w-20 h-8 rounded-md font-semibold mt-2">
          등록
        </button>
      </div>
    </div>
  );
}
