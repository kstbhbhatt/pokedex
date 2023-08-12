import React, { useState, useEffect } from "react";
import "./test.css";
import Card from "./Card/Card";

const Test = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData, setPokeData] = useState([]);
  const urlPokeData = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonList = () => {
      return fetch(urlPokeData)
        .then((res) => res.json())
        .then((d) => setPokeName(d));
    };
    fetchPokemonList();
  }, []);

  useEffect(() => {
    if (pokeName) {
      const fetchJsonData = async () => {
        try {
          const responses = await Promise.all(
            pokeName.results.map((poke) => fetch(poke.url))
          );
          const jsonResponses = await Promise.all(
            responses.map((response) => response.json())
          );

          setPokeData(jsonResponses);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchJsonData();
    }
  }, [pokeName]);
  console.log(pokeData[0]);

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="poke-list">
        {pokeData &&
          pokeData.map((pokeData, index) => (
            <Card pokeData={pokeData} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Test;
