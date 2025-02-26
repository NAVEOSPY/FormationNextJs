import { createContext } from "react";
import Pokedex from "./components/Pokedex/index.tsx";
import { useFetchPokemons } from "./hooks/pokemons.tsx";

export const PokemonsContext = createContext<any>(null);

export default function App() {
    const { isLoading, isError, pokemonsList } = useFetchPokemons();

    return (
        <PokemonsContext.Provider value={{ isLoading, isError, pokemonsList }}>
            <Pokedex />
        </PokemonsContext.Provider>
    );
}
