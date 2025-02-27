import { createContext, useEffect, useState } from "react";
import Pokedex from "../templates/Pokedex/Pokedex";

interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonInfo {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

async function fetchPokemons() {
  // Avec des promesses
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const resultat = await response.json();
  return resultat;
}

export const useFetchPokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pokemonsList, setPokemonsList] = useState<PokemonInfo[]>([]);

  const fetchAndSetPokemons = async () => {
    const resultat = await fetchPokemons();
    setIsLoading(false);
    setPokemonsList(resultat.pokemon_entries);
  };

  useEffect(() => {
    fetchAndSetPokemons().catch((err) => {
      setIsError(true);
    });
  }, []);

  return {
    isLoading,
    isError,
    pokemonsList,
  };
};

export const PokemonsContext = createContext<any>(null);

export default function PokemonList() {
  const { isLoading, isError, pokemonsList } = useFetchPokemons();

  return (
    <PokemonsContext.Provider value={{ isLoading, isError, pokemonsList }}>
      <Pokedex />
    </PokemonsContext.Provider>
  );
}
