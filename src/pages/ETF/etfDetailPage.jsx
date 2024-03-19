import React from "react";
import { useLocation } from "react-router";

import TopBackBar from "~/components/TopBackBar/TopBackBar";

export default function etfDetailPage() {
  const location = useLocation();
  console.log("location: ", location);

  return (
    <div>
      <TopBackBar></TopBackBar>

      <div>etfDetailPage</div>
    </div>
  );
}
