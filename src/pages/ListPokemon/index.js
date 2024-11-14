import React, { Suspense, useState } from "react";

import "./index.css";

import usePokemons from "../../hooks/usePokemons";
import { usePokemonContext } from "../../context/pokemonCtx";

//import SearchBox from "../../components1/searchbox";
//import PokemonCardContainer from "../../components1/pokemoncard/pokemonCardContainer";
//import Paginated from "../../components1/paginated";

const SearchBox = React.lazy(() => import("../../components1/searchbox"));
const PokemonCardContainer = React.lazy(() =>
  import("../../components1/pokemoncard/pokemonCardContainer")
);
const Paginated = React.lazy(() => import("../../components1/paginated"));


const ListPokemon = () => {
  usePokemons();
  const {
    pokemons,
    loading,
    metadata: { total, limit },
  } = usePokemonContext();
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Suspense fallback={<span>Loading...</span>}>
        <SearchBox />
        {loading && <span>Loading...</span>}
        {!loading &&
          pokemons.map((pokemon) => (
            <PokemonCardContainer key={pokemon.id} pokemon={pokemon} />
          ))}
        <Paginated
          page={page}
          total={Math.ceil(total / limit)}
          setPage={setPage}
        />
      </Suspense>
    </div>
  );
};
export default ListPokemon;


//Se esta usando lazy loading para cargar los componentes de manera dinamica
//Se usa suspense para mostrar un componente de carga mientras se carga el componente