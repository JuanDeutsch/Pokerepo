import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonCardUI from "./pokemonCardUI";

const PokemonCardContainer = ({ pokemon }) => {
    const navigate = useNavigate();
    
    const handlePokemonClick = (id) => {
        navigate(`/detail/${id}`);
    };
    
    return <PokemonCardUI pokemon={pokemon} onClick={() => handlePokemonClick(pokemon.id)}/>;
    }

export default PokemonCardContainer;