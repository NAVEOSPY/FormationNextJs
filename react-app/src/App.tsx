import "./intro.css";
import React from "react";
import { useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon.tsx";
import Loader from "./components/Loader/index.tsx";

const POKEMON_LIST: Pokemon[] = [
  { name: "Mew", num: 151 },
  { name: "Mewtwo", num: 150 },
  { name: "Dracolosse", num: 149 },
];
interface PokemonSpecies {
  name: string;
  url: string;
}
interface PokemonInfo {
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
  throw new Error();
  return resultat;
}

export default function App() {
  const [isloading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("");
  const [pokemonsList, setPokemonsList] = React.useState<PokemonInfo[]>([]);
  const [pokemonsUnFiltredList, setpokemonsUnFiltredPokemonsList] =
    React.useState<PokemonInfo[]>([]);

  const fetchAndSetPokemons = async () => {
    const resultat = await fetchPokemons();
    setIsLoading(false);
    // TODO : Reprendre ici pour que pokemon_entries corresponde au props de <Pokemon/>
    setPokemonsList(resultat.pokemon_entries);
    setpokemonsUnFiltredPokemonsList(resultat.pokemon_entries);
  };

  useEffect(() => {
    fetchAndSetPokemons().catch((err) => {
      setIsError(true);
    });
  }, []);

  const filterPokemonsByName = (
    listePokemons: PokemonInfo[],
    namePokemon: string
  ) => {
    console.log(namePokemon);
    setPokemonsList(
      listePokemons.filter((poke) =>
        poke.pokemon_species.name
          .toLowerCase()
          .startsWith(namePokemon.toLowerCase())
      )
    );
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFilterValue(event.target.value);
    filterPokemonsByName(pokemonsUnFiltredList, event.target.value);
  };

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
          {isError ? (
            <div>Error Appel</div>
          ) : isloading ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <div>
              <ul>
                {pokemonsList.map((pok: PokemonInfo) => (
                  <li>
                    <Pokemon
                      name={pok.pokemon_species.name}
                      num={pok.entry_number}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
