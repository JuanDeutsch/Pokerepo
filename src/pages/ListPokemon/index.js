import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import "./index.css";
import SearchBox from "../../components1/searchbox";
import PokemonCard from "../../components1/pokemoncard";

const interval = {
  limit: 151,
  offset: 0,
};

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searched, setSearched] = useState([]);

  const handleSearch = (search) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    setSearched(filtered);
  };

  useEffect(() => {
    const getPokemons = async () => {
      const pokedex = new Pokedex();
      const response = await pokedex.getPokemonsList(interval);
      const urls = response.results.map((pokemon) => pokemon.url);
      const pokemonsResponse = await pokedex.getResource(urls);
      setPokemons(pokemonsResponse);
      setSearched(pokemonsResponse);
    };
    getPokemons();
  }, []);
  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      {searched.map((pokemon) => (<PokemonCard key={pokemon.id} pokemon={pokemon} />))}
    </div>
  );
}
export default ListPokemon;
