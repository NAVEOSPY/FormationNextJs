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

export default function App() {
    const [filterValue, setFilterValue] = React.useState("");
    //const [pokemonsValue, setpokemonsValue] = React.useState([]);
    const [pokemonsList, setPokemonsList] = React.useState<PokemonInfo[]>([]);

    const fetchAndSetPokemons = async () => {
        const resultat = await fetchPokemons();
        // TODO : Reprendre ici pour que pokemon_entries corresponde au props de <Pokemon/>
        setPokemonsList(resultat.pokemon_entries);
    };

    useEffect(() => {
        fetchAndSetPokemons();
    }, []);

    const filterPokemonsByName = (
        listePokemons: PokemonInfo[],
        namePokemon: string,
    ) => {
        setPokemonsList(
            listePokemons.filter((poke) =>
                poke.name.toLowerCase().startsWith(namePokemon.toLowerCase()),
            ),
        );
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
        filterPokemonsByName(pokemonsList, event.target.value);
    };

    return (
        <>
            <div className="intro">
                <div>Bienvenue sur ton futur pokédex !</div>
                <div>
                    Tu vas pouvoir apprendre tout ce qu'il faut sur React, et
                    attraper des pokemons !
                </div>
                <div>
                    <input onChange={onInputChange} value={filterValue} />
                </div>

                <div>
                    Commence par créer ton premier pokemon:
                    <div>
                        <ul>
                            {pokemonsList.map((pok: PokemonInfo) => (
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
