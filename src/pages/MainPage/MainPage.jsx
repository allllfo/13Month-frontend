import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TabBar from '~/components/Main/TabBar/TabBar';

import TaxAdjustment from '~/components/Main/TaxAdjustment/TaxAdjustment';
import FindOut from '~/components/Main/FindOut/FindOut';
import Quiz from '~/components/Main/Quiz/Quiz';
import MyPage from '~/components/Main/MyPage/MyPage';

const tabs = [
  <TaxAdjustment></TaxAdjustment>,
  <FindOut></FindOut>,
  <Quiz></Quiz>,
  <MyPage></MyPage>,
];

export default function MainPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const userState = useSelector((state) => state.user);

  return (
    <div>
      {tabs[currentTab]}

      <div className="fixed bottom-0 h-20 w-full">
        <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab}></TabBar>
      </div>
    </div>
  );
}
