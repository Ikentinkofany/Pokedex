import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import axios from "axios";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100", {
        cancelToken: source.token,
      })
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setLoading(false);
        setPokemons(results.map((res) => res.data));
      });
    // source.cancel("Cancelled by user");
  }, []);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          {pokemons.map((pokemon, i) => (
            <Card
              key={i}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              img={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                pokemon.id +
                ".png"
              }
              type={pokemon.types[0].type.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
