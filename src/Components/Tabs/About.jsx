import React from "react";
import "./about.css";

function About({ detail }) {
  const { abilities, stats, types, height, weight } = detail;
  const abilityList = abilities.map((e) => e.ability.name).join(", ");
  const heightCM = `${height * 10} cm`;
  const weightKG = `${weight / 10} kg`;
  const type = types.map((e) => e.type.name).join(", ");
  return (
    <div className="about">
      <table className="about">
        <tbody>
          <tr>
            <td>Species</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{heightCM}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weightKG}</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>{abilityList}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default About;
