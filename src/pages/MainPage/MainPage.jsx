import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TabBar from '~/components/Main/TabBar/TabBar';

export default function MainPage() {
  // const userState = useSelector((state) => state.user);
  // console.log('state: ', userState);

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="fixed bottom-0 h-20 w-full">
      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab}></TabBar>
    </div>
  );
}
