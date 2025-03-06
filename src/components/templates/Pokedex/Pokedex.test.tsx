import { expect, test, vi, Mock, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Pokedex from "@/components/templates/Pokedex/Pokedex";

const MOCK_POKEDEX_DATA = {
    pokemon_entries: [
        {
            entry_number: 1,
            pokemon_species: { name: "squirtle" },
        },
    ],
};

describe("<Pokedex />", () => {
    test("Pokemons are displayed in Pokedex", async () => {
        /*
    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(MOCK_POKEDEX_DATA),
        })
      ) as Mock
    );
    */
        const pokemonListTest = [
            { entry_number: 1, pokemon_species: { name: "squirtle" } },
        ];

        render(<Pokedex pokemonsList={pokemonListTest} />);
        await waitFor(() => {
            expect(
                screen.getByText("squirtle", {
                    exact: false,
                }),
            ).toBeDefined();
        });
    });
});
