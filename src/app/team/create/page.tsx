"use client";
import { createTeam } from "@/app/actions/team";
import PokemonTeamLevel from "@/components/atomic/Pokemon/PokemonTeamLevel";
import { useState } from "react";

interface PokemonTeamLevelForm {
    entry: string;
    level: string;
}

interface PokemonTeamLevel {
    entry: number;
    level: number;
}

interface PokemonToCreate {
    name: string;
    pokemons: PokemonTeamLevel[];
}

export default await function CreatePage() {
    const [name, setName] = useState<string>("");
    const [pokemonTeamLevelList, setPokemonTeamLevelList] = useState<
        PokemonTeamLevelForm[]
    >([
        {
            level: "",
            entry: "",
        },
        {
            level: "",
            entry: "",
        },
        {
            level: "",
            entry: "",
        },
        {
            level: "",
            entry: "",
        },
        {
            level: "",
            entry: "",
        },
        {
            level: "",
            entry: "",
        },
    ]);

    const onCreate = () => {
        createTeam({
            name,
            pokemons: pokemonTeamLevelList.map((pokemon) => ({
                entry: parseInt(pokemon.entry),
                level: parseInt(pokemon.level),
            })),
        });
    };

    const onInputLevelChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: number,
    ) => {
        // ajout au tableau avant update
        const pokemonTempTeamLevelList: PokemonTeamLevelForm[] =
            structuredClone(pokemonTeamLevelList);

        pokemonTempTeamLevelList[key].level = event.target.value;
        setPokemonTeamLevelList(pokemonTempTeamLevelList);
    };

    const onInputEntryNumChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: number,
    ) => {
        // ajout au tableau avant update
        const pokemonTempTeamLevelList: PokemonTeamLevelForm[] =
            structuredClone(pokemonTeamLevelList);

        pokemonTempTeamLevelList[key].entry = event.target.value;
        setPokemonTeamLevelList(pokemonTempTeamLevelList);
    };

    return (
        <div>
            <form>
                <p>Nom de l'équipe :</p>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    {pokemonTeamLevelList.map((pokemon, index) => (
                        <div key={index}>
                            <div>
                                <h2>Pokemon n°{index + 1} à afficher</h2>
                                <div>
                                    <p>Entrée Pokédex du Pokemon:</p>
                                    <input
                                        name="entry_number"
                                        value={pokemon.entry}
                                        onChange={(e) =>
                                            onInputEntryNumChange(e, index)
                                        }
                                    />
                                </div>
                                <div>
                                    <p>Niveau du Pokémon</p>
                                    <input
                                        name="level"
                                        value={pokemon.level}
                                        onChange={(e) =>
                                            onInputLevelChange(e, index)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={onCreate}>
                    Créer mon équipe
                </button>
            </form>
        </div>
    );
};
