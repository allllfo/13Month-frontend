import React, { useCallback, useEffect, useState } from "react";
import { FcAdvertising } from "react-icons/fc";

import { getAllTips } from "~/lib/apis/tip";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

export default function Tip() {
  const [currentTip, setCurrentTip] = useState("");
  const [allTips, setAllTips] = useState([]);

  const normalStyle = "rounded-xl p-3 text-center bg-blue-50 ml-1 mr-1";
  const hoveringStyle = "rounded-xl p-3 text-center bg-blue-100 ml-1 mr-1";

  useEffect(() => {
    getAllTips().then((tipResp) => {
      setAllTips(tipResp);
    });
  }, []);

  return (
    <div className="bg-blue-50 rounded-xl p-2">
      <div className="flex gap-1 justify-center">
        <p className="text-gray-600">알고 계셨나요?</p>
        <FcAdvertising className="h-5 w-5" />
      </div>
      <Swiper
        direction={"vertical"}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={100}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        style={{ height: "110px" }}
        className="flex item-center"
      >
        {allTips.length > 0 ? (
          allTips.map((ele, idx) => (
            <SwiperSlide key={idx}>
              <p className="text-sm font-semibold text-center m-2">
                {ele.content}
              </p>
              <p className="text-xs text-center">{ele.sub}</p>
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </div>
  );
}
