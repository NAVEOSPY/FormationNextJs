import "./intro.css";
import React from "react";
import { useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon.tsx";

const POKEMON_LIST: Pokemon[] = [
  { name: "Mew", num: 151 },
  { name: "Mewtwo", num: 150 },
  { name: "Dracolosse", num: 149 },
];
interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
}
async function fetchPokemons() {
  // Avec des promesses
  const resultat = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
  //.then((pokemonData) => console.log(pokemonData));
  return resultat;
}

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");
  //const [pokemonsValue, setpokemonsValue] = React.useState([]);
  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([]);

  useEffect(() => {
    setPokemonList(await fetchPokemons());
  }, []);

  function filterPokemonsByName(
    listePokemons: PokemonInfo[],
    namePokemon: string
  ) {
    setPokemonList(
      listePokemons.filter((poke) =>
        poke.name.toLowerCase().startsWith(namePokemon.toLowerCase())
      )
    );
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    filterPokemonsByName(pokemonList, event.target.value);
  };

  return (
    <>
      <div className="intro">
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
          <div>
            <ul>
              {pokemonList.map((pok: PokemonInfo) => (
                <li>
                  <Pokemon name={pok.name} num={pok.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
