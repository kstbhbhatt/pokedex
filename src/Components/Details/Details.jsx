import React from "react";
import About from "../Tabs/About";
import BaseStats from "../Tabs/BaseStats";

function Details({ detail, tabSelected }) {
  const { stats } = detail;
  switch (tabSelected) {
    case "about":
      return <About detail={detail} />;
    case "base-stats":
      return <BaseStats stats={stats} />;
    case "evolution":
      return <div className="evolution">evolution</div>;
    default:
  }
}
export default Details;
