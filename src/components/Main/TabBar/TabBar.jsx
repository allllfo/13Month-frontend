import React from "react";

const tabs = ["findOut", "quiz", "home", "myPage", "entireMenu"];
const tabNames = ["알아보기", "퀴즈", "홈", "마이페이지", "전체 메뉴"];

export default function TabBar(props) {
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;

  let tabClassName = "max-h-full h-8";

  return (
    <div className="fixed bottom-0 h-16 pl-2" style={{ width: "400px" }}>
      <div className="flex justify-between h-full rounded-tl-lg rounded-tr-lg shadow-inner w-full bg-white">
        {tabs.map((ele, idx) => {
          let textColor = "text-gray-500";

          if (idx == currentTab) {
            ele += "Blue";
            textColor = "text-blue-500";
          }

          const src = "src/assets/images/tabBarIcons/" + ele + ".png";

          if (idx == 4) {
            tabClassName += " p-1";
          }

          return (
            <div
              className="w-1/5 flex flex-col justify-center items-center text-xs"
              key={ele}
              onClick={() => setCurrentTab(idx)}
            >
              <img className={tabClassName} src={src}></img>
              <p className={textColor}>{tabNames[idx]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
