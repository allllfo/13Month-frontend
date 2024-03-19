import React from "react";

export default function DetailInfo(props) {
  const code = props.code;

  // get info with code

  // test data
  const infos = {
    설명: "국내 유가증권시장 및 코스닥 시장에 상장되어 있는 종목 중, 의료기기 소부장 관련 키워드와 종목 유사도를 스코어링 후 상위 종목을 선정하여 산출한 지수",
    "순자산 총액": 305,
    사무수탁사: "신한펀드파트너스",
    상장일: "2023.08.22",
    수탁은행: "HSBC",
    연금투자: "가능",
    설정단위: "50,000좌",
    총보수:
      "0.45%(집합투자: 0.4%, AP/LP: 0.01%, 신탁업자: 0.02%, 일반사무: 0.02%)",
    분배금지급: "연 1회 지급",
    최소거래단위: "1주",
  };

  return (
    <div className="pt-4">
      <div className="font-thin text-sm">{infos["설명"]}</div>

      <hr className="mt-10 border-black" />

      <div className="flex grid grid-cols-2 mb-20">
        {Object.keys(infos).map((key) => {
          if (key === "설명") {
            return;
          }

          return (
            <div key={key} className="p-4 m-2 border-b">
              <p className="text-xs text-gray-600 mb-1">{key}</p>
              <p className="font-bold">{infos[key]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
