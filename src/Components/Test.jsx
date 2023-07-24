import React, { useState, useEffect } from "react";

// const Test = () => {
//   const [pokeName, setPokeName] = useState();
//   const [pokeData, setPokeData] = useState([]);
//   const urlPokeData = "https://pokeapi.co/api/v2/pokemon";
//   const fetchPokemonList = () => {
//     return fetch(urlPokeData)
//       .then((res) => res.json())
//       .then((d) => setPokeName(d));
//   };
//   const fetchPokemon = (url) => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((d) => setPokeData((prev) => [...prev, d]));
//   };
// useEffect(()=>{
//   async function fetchMoviesJSON() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//     const movies = await response.json();
//     return movies;
//   }
  
//   fetchMoviesJSON().then(movies => {
//    console.log(movies) ; // fetched movies
//   });

// }, [])
// async function fetchPokemonJSON(url) {
//   const response = await fetch(url);
//   const movies = await response.json();
//   return movies;
// }
  
//   useEffect(() => {
//     if (!pokeName) {
//       fetchPokemonList();
//     }
//   }, []);
//   useEffect(() => {
//     if (pokeName) {
//       // console.log(pokeName);
//       pokeName.results.map((el) => fetchPokemonJSON(el.url).then(movies => {
//         console.log(movies.species.name) ; // fetched movies
//        }));
//     }
//   }, [pokeName]);
//   // useEffect(() => {
//   //   if (pokeName) {
//   //     // console.log(pokeName);
//   //     pokeName.results.map((el) => fetchPokemon(el.url));
//   //   }
//   // }, [pokeName]);
const Test = () => {
  const [pokeName, setPokeName] = useState();
  const [pokeData, setPokeData] = useState([]);
  const urlPokeData = "https://pokeapi.co/api/v2/pokemon";
  const fetchPokemonList = () => {
    return fetch(urlPokeData)
      .then((res) => res.json())
      .then((d) => setPokeName(d));
  };
  useEffect(() => {
        if (!pokeName) {
          fetchPokemonList();
        }
      }, []);

const [jsonDataArray, setJsonDataArray] = useState([]);

  useEffect(() => {
    if(pokeName){
      const fetchJsonData = async () => {
        try {
          const responses = await Promise.all(pokeName.results.map(url => fetch(url.url)));
          const jsonResponses = await Promise.all(responses.map(response => response.json()));
  
          setJsonDataArray(jsonResponses);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchJsonData();
    } 
  }, [pokeName]);






  return (
    <div>
    <h2>JSON Data Responses</h2>
    <ul>
      {jsonDataArray.map((jsonData, index) => (
        <li key={index}>{jsonData.species.name}{jsonData.id}</li>
      ))}
    </ul>
  </div>
  );
};

export default Test;
