import Image from "next/image";
import "./page.css";

interface PokemonSprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}

interface PokemonType {
    type: { name: string };
}
export interface PokemonPresentation {
    name: string;
    sprites: PokemonSprites;
    types: PokemonType[];
}

const fetchPokemonsbyId = async (id: string) => {
    // Avec des promesses

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    const resultat: PokemonPresentation = await response.json();
    return resultat;
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const pokemon: PokemonPresentation = await fetchPokemonsbyId(id);
    const sprites = [
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny,
    ];

    return (
        <div className="pokemonContainer">
            <p className="title">{pokemon.name} </p>
            <div className="pokemonImages">
                {sprites.map((spriteImg) => (
                    <Image
                        key={spriteImg}
                        src={spriteImg}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                    />
                ))}
            </div>
            <b>Types</b>
            <div className="pokemonTypes">
                {pokemon.types.map((poType: PokemonType) => (
                    <div key={poType.type.name}>{poType.type.name}</div>
                ))}
            </div>
        </div>
    );
}
