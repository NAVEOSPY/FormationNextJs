import Image from "next/image";

interface PokemonSprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

interface PokemonType {
  name: string;
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
  const sprites = pokemon.sprites;
  const example = () => (
    <Image
      src={sprites.back_default}
      width={10}
      height={10}
      alt={pokemon.name}
    />
  );

  return (
    <div>
      <p>{pokemon.name} </p>
      <p>{sprites.back_default} </p>
      <p>{sprites.back_shiny} </p>
      <p>{sprites.front_default} </p>
      <p>{sprites.front_shiny} </p>
      <p>{example()}</p>

      <div>Hello world : {id}</div>
      <div>
        {pokemon.types.map((popo: PokemonType) => (
          <div>{popo.name}</div>
        ))}
      </div>
    </div>
  );
}
