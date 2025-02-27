import Pokedex from "@/components/templates/Pokedex/Pokedex";
import "./intro.css";
import PokedexWithContext, {
  PokemonInfo,
} from "@/components/molecules/PokedexWithContext";

export default async function RootPage() {
  const fetchPokemons = async () => {
    // Avec des promesses

    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const resultat = await response.json();
    return resultat;
  };

  const resultat: { pokemon_entries: PokemonInfo[] } = await fetchPokemons();

  return (
    <div className="intro">
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>
        Tu vas pouvoir apprendre tout ce qu il faut sur React puis Next.js, et
        attraper des pokemons !
      </div>
      <div>Commence par créer ton premier pokemon: Mew !</div>
      <div>
        <Pokedex pokemonsList={resultat.pokemon_entries} />
      </div>
    </div>
  );
}
