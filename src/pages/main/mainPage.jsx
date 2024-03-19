import React, { useState } from "react";
import Header from "~/components/Main/Header/Header";
import TabBar from "~/components/Main/TabBar/TabBar";

import FindOut from "~/components/Main/FindOut/FindOut";
import Quiz from "~/components/Main/Quiz/Quiz";
import Home from "~/components/Main/Home/Home";
import MyPage from "~/components/Main/MyPage/MyPage";
import EntireMenu from "~/components/Main/EntireMenu/EntireMenu";

export default function MainPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    <FindOut></FindOut>,
    <Quiz></Quiz>,
    <Home></Home>,
    <MyPage></MyPage>,
    <EntireMenu></EntireMenu>,
  ];

  return (
    <div>
      <Header></Header>

      {tabs[currentTab]}

      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab}></TabBar>
    </div>
  );
}
