import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import "./index.css";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox";

const interval = {
  limit: 151,
  offset: 0,
};

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  const handlePokemonClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleSeach = (search) => {
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
      <SearchBox onSearch={handleSeach} />
      {pokemons.map((pokemon) => (
        <div
          className="pokemon"
          onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}kg</p>
        </div>
      ))}
    </div>
  );
};
export default ListPokemon;
