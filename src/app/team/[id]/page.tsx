import Pokedex from "@/components/templates/Pokedex/Pokedex";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

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
  const team = await prisma.team.findUnique({
    where: { id: 1 },
    select: {
      pokemons: true,
    },
  });
  console.log(team.pokemons[0].pokemonEntry);
  const pokemonsDetails = await Promise.all(
    team?.pokemons.map(async (poke) => {
      const pokemonDataResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poke.pokemonEntry}`
      );
      const { name, types, sprites } = await pokemonDataResponse.json();

      return {
        name,
        types,
        level: poke.level,
        imageSrc: sprites.front_default,
      };
    })
  );
  console.log(pokemonsDetails);
  return (
    <div>
      <p className="title">{team.name} </p>
      <div className="pokemonContainer">
        <div className="pokemonImages">
          {pokemonsDetails.map((poke) => (
            <div>
              <p className="title">{poke.name} </p>
              <Image
                key={poke.name}
                src={poke.imageSrc}
                width={100}
                height={100}
                alt={poke.name}
              />
              <b>Types</b>
              <div className="pokemonTypes">
                {poke.types.map((poType: PokemonType) => (
                  <div key={poType.type.name}>{poType.type.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
