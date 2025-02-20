interface Props {
  name: string;
  num: number;
}

const Pokemon = ({ name, num }: Props) => {
  return (
    <div>
      <div className="justify-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
          alt="pokemon"
        />
        <p>{name}</p>
        <p>{num}</p>
      </div>
    </div>
  );
};

export default Pokemon;
