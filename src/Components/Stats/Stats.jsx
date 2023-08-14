import React, { useState } from "react";
import "./stats.css";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Tab from "../Tabs/Tab";
import BackButton from "../BackButton/BackButton";

function Stats({ pokeDetails, onBackClick }) {
  const { name, id, species, types, sprites } = pokeDetails;
  const [detailSelected, setDetailSelected] = useState("about");
  const onDetailsTabClick = (e) => {
    const { id } = e.target;
    console.log("clicked", id);
    setDetailSelected(id);
  };
  console.log(id);
  return (
    <>
      <div className="overlay"></div>
      <div className="stats-card">
        <BackButton onClick={() => onBackClick()} />
        <Card pokeData={pokeDetails} onClick={() => {}} />
        <div className="details">
          <img
            className="stat-img"
            src={sprites.other.dream_world.front_default}
            alt={species.name}
          />
          <Tab onDetailsTabClick={onDetailsTabClick} />
          <div className="tab-details">
            <Details detail={pokeDetails} tabSelected={detailSelected} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Stats;
