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

//Ya no es necesario utilizar el index.js, esto porque se dividieron las reponsabilidades de la UI y la lógica de la vista.
//Ahora el componente PokemonCardContainer se encarga de la lógica de la vista y PokemonCardUI de la UI.
//Esto hace que el código sea más limpio y fácil de mantener.
//Y esto se evidencia en el apartado de la pokemon list, donde se importa el componente PokemonCardContainer y no PokemonCard.
//Una desventaja de este patron puede ser que a medida que se aumenta la cantidad de contenedores, la estructura del codigo se vuelve mas compleja
//Puede duplicar la logica del negocio dado el caso diferentes contenedores necesiten la misma logica
//Y puede llevar la posibilidad de encontrar un aumento de codigo repetitivo