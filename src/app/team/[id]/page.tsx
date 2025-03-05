import { PokemonType } from "@/core/type/pokemons";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import "./team.css";

// If Connection Timeout, disable your ipv6
const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default async function PokemonPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const teamId = (await params).id;

    // Utilise Prisma pour récupérer la team ici !
    const teams = await prisma.team.findMany({
        where: { id: +teamId },
        select: {
            pokemons: true,
        },
    });

    const team = teams[0];

    if (!team) {
        return <div>Oups, je n'ai pas trouvé d'équipe...</div>;
    }

    const pokemonsDetails = await Promise.all(
        team?.pokemons.map(async (poke) => {
            const pokemonDataResponse = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${poke.pokemonEntry}`,
            );
            const { name, types, sprites } = await pokemonDataResponse.json();

            return {
                name,
                types,
                level: poke.level,
                imageSrc: sprites.front_default,
            };
        }),
    );

    return (
        <div>
            <p className="title">{team.name} </p>
            <div className="pokemonContainer">
                <div className="pokemonImages">
                    {pokemonsDetails.map((poke) => (
                        <div key={poke.name}>
                            <p className="title">{capitalize(poke.name)} </p>
                            <Image
                                key={poke.name}
                                src={poke.imageSrc}
                                width={100}
                                height={100}
                                alt={poke.name}
                            />
                            <div>
                                <b>Niveau :</b> {poke.level}
                            </div>
                            <div>
                                <b>Types</b>
                            </div>
                            <div className="pokemonTypes">
                                {poke.types.map((poType: PokemonType) => (
                                    <div key={poType.type.name}>
                                        {poType.type.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
