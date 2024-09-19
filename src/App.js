import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

const interval = {
  limit: 151,
  offset: 0,
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const pokedex = new Pokedex();
      const response = await pokedex.getPokemonsList(interval);
      const urls = response.results.map((pokemon) => pokemon.url);
      const pokemonsResponse = await pokedex.getResource(urls);
      setPokemons(pokemonsResponse);
    };
    getPokemons();
  }, []);
  return (
    <div className="App">
      {
        pokemons.map(
          (pokemon) => (
            <div className="pokemon">
              <h1>{pokemon.name}</h1>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>Height: {pokemon.height}</p>
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
