import React from "react";
import { capitalize } from "lodash";
import "./index.css";

const PokemonCardUI = ({ pokemon, onClick }) => {
    return(
    <div className="pokemon" onClick={onClick}>
        <img height="265" width="236" src={pokemon.sprites.front_default} alt={capitalize(pokemon.name.trim())} />
        <span className="number">
            { String(pokemon.id).padStart(3, '0') }
        </span>
        <div class="info-box">
            <span className="name">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
        </div>
    </div>
    );
}

export default PokemonCardUI;