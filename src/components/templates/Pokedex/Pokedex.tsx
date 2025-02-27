"use client";

import "./intro.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonPreview from "../../atomic/Pokemon/PokemonPreview";
import { PokemonInfo } from "../../molecules/PokedexWithContext";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/molecules/Pagination/Pagination";
import PokemonSearchBar from "../PokemonSearchBar/PokemonSearchBar";

export default function Pokedex({
  pokemonsList,
}: {
  pokemonsList: PokemonInfo[];
}) {
  const searchParams = useSearchParams();
  const paginateUrlParam: number = parseInt(
    searchParams.get("paginate") || "1"
  );

  const paginateState = useState<number>(paginateUrlParam);
  const [paginate] = paginateState;

  //const { isLoading, isError, pokemonsList } = useContext(PokemonsContext);

  const [pokemonsFilteredList, setPokemonsFilteredList] = useState<
    PokemonInfo[]
  >([]);

  const pokemonsByPage = 30;

  useEffect(() => {
    //if (!isLoading) {
    setPokemonsFilteredList(pokemonsList);
    //}
  }, [pokemonsList]);

  const filterPokemonsByName = (filterValue: string) => {
    setPokemonsFilteredList(
      pokemonsList.filter((poke) =>
        poke.pokemon_species.name
          .toLowerCase()
          .startsWith(filterValue.toLowerCase())
      )
    );
  };

  // if (isError) {
  //   return <div>Désolé, je ne peux pas accéder aux pokémons</div>;
  // }

  return (
    <>
      <div>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, et attraper des
          pokemons !
        </div>
        <PokemonSearchBar callback={filterPokemonsByName} />
        <div>
          Commence par créer ton premier pokemon:
          <div>
            <div>
              <div>{paginate}</div>
              <Pagination paginateState={paginateState} />
            </div>
            <div className="pokedex">
              {pokemonsFilteredList
                .filter(
                  (poke) =>
                    poke.entry_number > (paginate - 1) * pokemonsByPage &&
                    poke.entry_number < paginate * pokemonsByPage
                )
                .map((pok: PokemonInfo) => (
                  <div key={pok.pokemon_species.name}>
                    <PokemonPreview
                      name={pok.pokemon_species.name}
                      num={pok.entry_number}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
