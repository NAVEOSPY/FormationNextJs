import Image from "next/image";
import "./page.css";
import { PokemonPresentation, PokemonType } from "@/core/type/pokemons";
import { fetchPokemonsbyId } from "@/core/services/pokemons";

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
