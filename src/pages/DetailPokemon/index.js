import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import "./index.css";

const DetailPokemon = () => {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const pokedex = new Pokedex();
        const response = await pokedex.getResource(
          `/api/v2/pokemon/${idPokemon}`
        );
        setPokemon(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPokemon();
  }, [idPokemon]);

  return (
    <>
      {!loading && pokemon && (
        <div class="container">
          <div class="background">
            <div
              id="image"
              style={{
                backgroundImage: `url(${pokemon.sprites.front_default})`,
              }}
            >
              <div class="idPokemon">#{pokemon.id}</div>
            </div>
            <div class="nametype">
              <div class="name">
                <h1>{pokemon.name}</h1>
                <h2>{pokemon.types[0].type.name}</h2>
              </div>
              <div class="stats">
                <div class="stat">
                  <div class="statname">HP {pokemon.stats[0].base_stat}</div>
                </div>
                <div class="stat">
                  <div class="statname">CP {pokemon.stats[1].base_stat}</div>
                </div>
                <div class="stat">
                  <div class="statname">Weight {pokemon.weight}</div>
                </div>
                <div class="stat">
                  <div class="statname">Height {pokemon.height}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {!loading && !pokemon && <p>Pokemon not found 404 Unu</p>}
      <Link to="/">volver</Link>
    </>
  );
};

export default DetailPokemon;
