import React, { useCallback, useEffect, useState } from "react";
import { FcAdvertising } from "react-icons/fc";

import { getAllTips } from "~/lib/apis/tip";

export default function Tip() {
  const [currentTip, setCurrentTip] = useState("");
  const [allTips, setAllTips] = useState([]);
  const [intervalId, setIntervalId] = useState(null); // intervalId 상태 추가

  const intervalTime = 8000;

  const [isHovering, setIsHovering] = useState(false);

  const normalStyle = "rounded-xl p-3 text-center bg-blue-50 ml-1 mr-1";
  const hoveringStyle = "rounded-xl p-3 text-center bg-blue-100 ml-1 mr-1";

  function startInterval(time) {
    const interval = setInterval(() => {
      setRandomTip();
    }, intervalTime);
    setIntervalId(interval);
  }

  const setRandomTip = useCallback(() => {
    const nextTipIdx = Math.floor(Math.random() * allTips.length);
    setCurrentTip(allTips[nextTipIdx]);
  }, [allTips]);

  useEffect(() => {
    getAllTips().then((tipResp) => {
      setAllTips(tipResp);
    });
  }, []);

  useEffect(() => {
    if (allTips.length > 0) {
      setRandomTip();
      startInterval(intervalTime);
    }
  }, [allTips]);

  return (
    <div>
      {currentTip != "" ? (
        <div
          className={isHovering ? hoveringStyle : normalStyle}
          onMouseEnter={() => {
            clearInterval(intervalId);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            startInterval(intervalTime);
            setIsHovering(false);
          }}
        >
          <div className="flex gap-2 justify-center">
            <p className="text-gray-600 mb-1">알고 계셨나요?</p>
            <FcAdvertising className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold">{currentTip.content}</p>
          <p className="text-xs">{currentTip.sub}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
