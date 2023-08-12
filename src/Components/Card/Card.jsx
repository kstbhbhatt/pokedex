import React from "react";
import "./card.css";

function Card({ pokeData }) {
  const { name, id, species, types, sprites } = pokeData;
  const classNames = types.map((type) => `type-${type.type.name}`).join(" ");

  const padPokeId = `#${id.toString().padStart(3, "0")}`;
  return (
    <div className={`card-container ${classNames}`}>
      <div className="pokeball"></div>
      <div className="poke-id">{padPokeId}</div>
      <div className="card-content  card-left">
        <h1>{name}</h1>
        <div className="card-type">
          {types.map((type) => (
            <span
              key={type.slot}
              className={`type-${type.type.name} type ${type.slot}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="card-content card-right">
        <img src={sprites.other.dream_world.front_default} alt={species.name} />
      </div>
    </div>
  );
}

export default Card;
