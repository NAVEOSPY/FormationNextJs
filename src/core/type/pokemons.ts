export interface PokemonSprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}

export interface PokemonType {
    type: { name: string };
}

export interface PokemonPresentation {
    name: string;
    sprites: PokemonSprites;
    types: PokemonType[];
}
