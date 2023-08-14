import React from "react";
import "./baseStats.css";

function BaseStats({ stats }) {
  console.log(stats);
  const calc = (value) => {
    return `progress color-${value > 50 ? "positive" : "negative"}`;
  };
  const width = (value) => {
    return `${value}%`;
  };
  return (
    <div className="about">
      <table className="about">
        <tbody>
          {stats.map((e) => {
            return (
              <tr>
                <td>{e.stat.name}</td>
                <td>
                  {e.base_stat}
                  <div className="progress-bar">
                    <div
                      className={calc(e.base_stat)}
                      style={{ width: width(e.base_stat) }}
                    ></div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default BaseStats;
