"use client";

import "./intro.css";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Pokemon from "../../atomic/Pokemon/Pokemon";
import Loader from "../../atomic/Loader/Loader";
import { PokemonInfo } from "../../molecules/PokemonList";
import { PokemonsContext } from "../../molecules/PokemonList";
import PokemonSearchBar from "@/components/templates/PokemonSearchBar/PokemonSearchBar";
import { useSearchParams } from "next/navigation";

export default function Pokedex() {
  //const search = window.location.search;
  //const searchObject = new URLSearchParams(search);
  //const paginate: number = parseInt(searchObject.get("paginate") || "1");

  const searchParams = useSearchParams();
  const paginate: number = parseInt(searchParams.get("paginate") || "1");

  const { isLoading, isError, pokemonsList } = useContext(PokemonsContext);
  const [filterValue, setFilterValue] = React.useState("");
  const [pokemonsFilteredList, setPokemonsFilteredList] = React.useState<
    PokemonInfo[]
  >([]);

  const pokemonsByPage = 30;

  useEffect(() => {
    if (!isLoading) {
      setPokemonsFilteredList(pokemonsList);
    }
  }, [isLoading, pokemonsList]);

  const filterPokemonsByName = (
    listePokemons: PokemonInfo[],
    namePokemon: string
  ) => {
    setPokemonsFilteredList(
      listePokemons.filter((poke) =>
        poke.pokemon_species.name
          .toLowerCase()
          .startsWith(namePokemon.toLowerCase())
      )
    );
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    filterPokemonsByName(pokemonsList, event.target.value);
  };

  if (isError) {
    return <div>Désolé, je ne peux pas accéder aux pokémons</div>;
  }

  return (
    <>
      <div>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, et attraper des
          pokemons !
        </div>
        <div>
          <input onChange={onInputChange} value={filterValue} />
        </div>

        <div>
          Commence par créer ton premier pokemon:
          {isLoading ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <div>
              <PokemonSearchBar paginate={paginate} />

              <div className="pokedex">
                {pokemonsFilteredList
                  .filter(
                    (poke) =>
                      poke.entry_number > (paginate - 1) * pokemonsByPage &&
                      poke.entry_number < paginate * pokemonsByPage
                  )
                  .map((pok: PokemonInfo) => (
                    <div>
                      <Pokemon
                        name={pok.pokemon_species.name}
                        num={pok.entry_number}
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
