import React from 'react';

const tabs = ['taxAdjustment', 'findOut', 'quiz', 'myPage'];
const tabNames = ['연말정산', '알아보기', '퀴즈', '마이페이지'];

export default function TabBar(props) {
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;

  return (
    <div className="flex justify-between h-full rounded-tl-lg rounded-tr-lg shadow-inner">
      {tabs.map((ele, idx) => {
        let textColor = 'text-gray-500';

        if (idx == currentTab) {
          ele += 'Black';
          textColor = 'text-gray-950';
        }

        const src = 'src/components/Main/TabBar/icons/' + ele + '.png';

        return (
          <div
            className="w-1/4 flex flex-col justify-center items-center"
            key={ele}
            onClick={() => setCurrentTab(idx)}
          >
            <img className="max-h-full h-12" src={src}></img>
            <p className={textColor}>{tabNames[idx]}</p>
          </div>
        );
      })}
    </div>
  );
}
