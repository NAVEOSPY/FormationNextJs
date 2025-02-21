import "./intro.css";
import React from "react";
import Pokemon from "./components/Pokemon/Pokemon.tsx";

function App() {
  const pokemonFilterValue = "";
  const [filterValue, setFilterValue] = React.useState("");

  function filterPokemonsByName(listePokemons: Pokemon[], namePokemon: string) {
    const resultat = listePokemons.filter((poke) => poke.name === namePokemon);
    console.log(resultat);

    //return namePokemon;
    //return listePokemons.find((resultat) => resultat.name === namePokemon);
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    const listePokemonaFiltrer = [
      { name: "M", num: 150 },
      { name: "C", num: 7 },
      { name: "S", num: 4 },
    ];
    console.log(filterPokemonsByName(listePokemonaFiltrer, event.target.value));
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
          <input onChange={onInputChange} value={pokemonFilterValue} />
        </div>

        <div>
          Commence par créer ton premier pokemon:
          <div>
            <Pokemon name="Mew" num={150} />
            <Pokemon name="Carapuce" num={7} />
            <Pokemon name="Salamèche" num={4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
