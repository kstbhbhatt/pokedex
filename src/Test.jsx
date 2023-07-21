import React, { useState, useEffect } from "react";

const Test = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData, setPokeData] = useState([]);
  const urlPokeData = "https://pokeapi.co/api/v2/pokemon";
  const fetchPokemonList = () => {
    return fetch(urlPokeData)
      .then((res) => res.json())
      .then((d) => setPokeName(d));
  };
  const fetchPokemon = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setPokeData((prev) => [...prev, d]));
  };

  useEffect(() => {
    if (!pokeName) {
      fetchPokemonList();
    }
  }, []);
  useEffect(() => {
    if (pokeName) {
      console.log(pokeName);
      pokeName.results.map((el) => fetchPokemon(el.url));
    }
  }, [pokeName]);
  return (
    <>
      <h1>PokeMon List</h1>
      <div>
        <ul>
          {pokeData.length &&
            pokeData.map((el) => <li key={el.id}>{el.species.name}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Test;
