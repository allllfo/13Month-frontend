import React from "react";
import { useSelector } from "react-redux";

import TopBackBar from "~/components/TopBackBar/TopBackBar";

export default function prevPreviewPage() {
  const userState = useSelector((state) => state.user13th);

  return (
    <div>
      <TopBackBar />

      <p>이전 연말정산 결과 보기 페이지</p>
    </div>
  );
}
