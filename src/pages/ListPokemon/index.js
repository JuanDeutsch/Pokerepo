import React, { useState } from "react";

import "./index.css";

import SearchBox from "../../components1/searchbox";
import PokemonCardContainer from "../../components1/pokemoncard/pokemonCardContainer";
import Paginated from "../../components1/paginated";

import usePokemons from "../../hooks/usePokemons";
import { usePokemonContext } from "../../context/pokemonCtx";


const ListPokemon = () => {
  usePokemons();
  const {
    pokemons,
    loading,
    metadata: { total, limit }
  } = usePokemonContext();
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <SearchBox />
      {loading && <span>Loading...</span>}
      {!loading &&
        pokemons.map((pokemon) => (
          <PokemonCardContainer key={pokemon.id} pokemon={pokemon} />
        ))}
      <Paginated page={page} total={ Math.ceil(total / limit) } setPage={setPage} />
    </div>
  );
};
export default ListPokemon;
