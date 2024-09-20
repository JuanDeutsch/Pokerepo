import { useEffect, useState, useCallback } from "react";
import Pokedex from "pokedex-promise-v2";
import "./index.css";
import SearchBox from "../../components1/searchbox";
import PokemonCard from "../../components1/pokemoncard";
import Paginated from "../../components1/paginated";

const interval = {
  limit: 150,
  offset: 0,
};

const total = 1025;

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleSearch = (search) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    setSearched(filtered);
  };

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    const pokedex = new Pokedex();
    const response = await pokedex.getPokemonsList({ ...interval, offset: page * interval.limit});
    const urls = response.results.map((pokemon) => pokemon.url);
    const pokemonsResponse = await pokedex.getResource(urls);
    setPokemons(pokemonsResponse);
    setSearched(pokemonsResponse);
    setLoading(false);
  }, [page, setPokemons, setSearched]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      {loading && <span>Loading...</span>}
      {!loading && searched.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      <Paginated page={page} setPage={setPage} total={total / interval} />
    </div>
  );
};
export default ListPokemon;
