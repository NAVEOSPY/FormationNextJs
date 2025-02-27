interface Pokemon {
    name: string;
    num: number;
}

const PokemonPreview = ({ name, num }: Pokemon) => {
    return (
        <div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                alt="pokemon"
            />
            <div>
                <p>Nom: {name}</p>
                <p>Numéro: {num}</p>
            </div>
        </div>
    );
};

export default PokemonPreview;
