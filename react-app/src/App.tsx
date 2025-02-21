import "./intro.css";
import React from "react";
import Pokemon from "./components/Pokemon/Pokemon.tsx";

const POKEMON_LIST: Pokemon[] = [
  { name: "Mew", num: 151 },
  { name: "Mewtwo", num: 150 },
  { name: "Dracolosse", num: 149 },
];

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");
  const [pokemonsValue, setpokemonsValue] = React.useState(POKEMON_LIST);

  function filterPokemonsByName(listePokemons: Pokemon[], namePokemon: string) {
    setpokemonsValue(
      listePokemons.filter((poke) =>
        poke.name.toLowerCase().startsWith(namePokemon.toLowerCase())
      )
    );
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    filterPokemonsByName(POKEMON_LIST, event.target.value);
    //console.log(filterPokemonsByName(POKEMON_LIST, event.target.value));
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
              {pokemonsValue.map((pok) => (
                <li>
                  <Pokemon name={pok.name} num={pok.num} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
