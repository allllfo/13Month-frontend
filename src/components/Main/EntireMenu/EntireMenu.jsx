import React from "react";

import { useDispatch } from "react-redux";
import { removeUser } from "~/store/reducers/user";

import {
  FcBullish,
  FcMoneyTransfer,
  FcIdea,
  FcOnlineSupport,
} from "react-icons/fc";

export default function EntireMenu() {
  const dispatch = useDispatch();

  const menus = [
    { title: "연말정산 미리보기", link: "/preview/main", img: MoneyBagIcon },
    { title: "연말정산 미리보기", link: "/preview/main", img: MoneyBagIcon },
    { title: "연말정산 미리보기", link: "/preview/main", img: MoneyBagIcon },
  ];

  const menuStyle = "border-b p-3 flex items-center gap-1";

  return (
    <div>
      {menus.map((ele, idx) => (
        <div
          key={ele.title}
          className={menuStyle}
          style={{ cursor: "pointer" }}
        >
          <p>{ele.title}</p>
          <img src={ele.img} className="h-7" />
        </div>
      ))}

      <div
        onClick={() => {
          dispatch(removeUser());
          window.location.href = "/";
        }}
        style={{ cursor: "pointer" }}
        className={menuStyle}
      >
        로그아웃
      </div>
    </div>
  );
}
