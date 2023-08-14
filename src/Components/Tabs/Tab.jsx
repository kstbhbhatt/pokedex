import React, { useState } from "react";

function Tab({ onDetailsTabClick }) {
  const [currentTab, setcurrentTab] = useState("about");
  const TAB_ABOUT = "about";
  const TAB_STATS = "base-stats";
  const TAB_EVOLUTION = "evolution";
  const TAB_DEFAULT = TAB_ABOUT;
  const classNames = (id) => `tabs-button ${currentTab === id ? "active" : ""}`;
  const tabs = [
    {
      id: TAB_ABOUT,
      label: "About",
    },
    {
      id: TAB_STATS,
      label: "Base Stats",
    },
    {
      id: TAB_EVOLUTION,
      label: "Evolution",
    },
  ];
  return (
    <div className="tabs">
      {tabs.map((e) => (
        <button
          id={e.id}
          key={e.id}
          className={classNames(e.id)}
          onClick={(e) => {
            setcurrentTab(e.target.id);
            onDetailsTabClick(e);
          }}
        >
          {e.label}
        </button>
      ))}
      {/* <button
        id="about"
        className="tabs-button"
        onClick={(e) => {
          onDetailsTabClick(e);
        }}
      >
        About
      </button>
      <button
        id="basic-stats"
        className="tabs-button"
        onClick={(e) => {
          onDetailsTabClick(e);
        }}
      >
        Base Stats
      </button>
      <button
        id="evolution"
        className="tabs-button"
        onClick={(e) => {
          onDetailsTabClick(e);
        }}
      >
        Evolution
      </button> */}
    </div>
  );
}
export default Tab;
