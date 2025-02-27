import { PokemonPresentation } from "../type/pokemons";

export const fetchPokemonsbyId = async (id: string) => {
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
