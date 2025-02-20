interface Props {
    name: string;
    num: number;
}

const Pokemon = ({ name, num }: Props) => {
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

export default Pokemon;
