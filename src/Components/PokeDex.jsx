import React, { useState, useEffect } from "react";
import "./pokeDex.css";
import Card from "./Card/Card";
import Stats from "./Stats/Stats";
import Loader from "./Loader/Loader";

const Test = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData, setPokeData] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState([]);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [isLoaderActive, setIsLoaderACtive] = useState(true);
  const urlPokeData = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.";

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
          setIsLoaderACtive(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchJsonData();
    }
  }, [pokeName]);
  console.log(pokeData[0]);
  const openStats = (e) => {
    console.log("opened", e);
    setPokemonSelected(e);
    setShowStatsModal(true);
  };
  const onBackClick = () => setShowStatsModal(false);
  return (
    <React.Fragment>
      <Loader showLoader={isLoaderActive} />
      <div>
        <h1>Pokédex</h1>
        <div className="poke-list">
          {pokeData &&
            pokeData.map((pokeData, index) => (
              <Card pokeData={pokeData} key={index} onClick={openStats} />
            ))}
        </div>
      </div>
      {showStatsModal && (
        <Stats pokeDetails={pokemonSelected} onBackClick={onBackClick} />
      )}
    </React.Fragment>
  );
};

export default Test;
