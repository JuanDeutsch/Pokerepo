import React from "react";

import { useNavigate } from "react-router-dom";
import { capitalize } from "lodash";
import "./index.css";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handlePokemonClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="pokemon" onClick={() => handlePokemonClick(pokemon.id)}>
      <img height="265" width="236" src={pokemon.sprites.front_default} alt={capitalize(pokemon.name.trim())} />
      <span className="number">
        { String(pokemon.id).padStart(3, '0') }
      </span>
      <div class="info-box">
        <span className="name">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
