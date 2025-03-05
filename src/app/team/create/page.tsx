"use client";
import PokemonTeamLevel from "@/components/atomic/Pokemon/PokemonTeamLevel";
import { useState } from "react";

interface PokemonTeamLevel {
  entry: number;
  level: number;
}

interface PokemonToCreate {
  name: string;
  pokemons: PokemonTeamLevel[];
}

export default await function CreatePage() {
  const [pokemonTeamLevelList, setPokemonTeamLevelList] = useState<
    PokemonTeamLevel[]
  >([]);

  const onInputLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    // ajout au tableau avant update
    const pokemonTempTeamLevelList: PokemonTeamLevel[] = pokemonTeamLevelList;
    pokemonTempTeamLevelList[key].level = parseInt(event.target.value);
    setPokemonTeamLevelList(pokemonTempTeamLevelList);

    console.log("pokemonTeamLevelList" + { pokemonTeamLevelList });
  };
  const onInputEntryNumChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    // ajout au tableau avant update
    const pokemonTempTeamLevelList: PokemonTeamLevel =
      pokemonTeamLevelList[key];
    pokemonTempTeamLevelList.entry = parseInt(event.target.value);
    pokemonTeamLevelList[key] = pokemonTempTeamLevelList;
    console.log("pokemonTeamLevelList" + { pokemonTeamLevelList });
  };

  return (
    <div>
      <form>
        <div>
          <h2>Pokemon n° num à afficher</h2>
          <div>
            <p>Entrée Pokédex du Pokemon:</p>
            <input
              key={1}
              name="entry_number"
              onChange={() => onInputEntryNumChange}
            />
          </div>
          <div>
            <p>Niveau du Pokémon</p>
            <input key={1} name="level" onChange={() => onInputLevelChange} />
          </div>
        </div>
        <button type="submit">Créer mon équipe</button>
      </form>
    </div>
  );
};
