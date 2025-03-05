export default function PokemonTeamLevel(tabNum: number[]) {
  return (
    <div>
      <div>
        <h2>Pokemon n°{num}</h2>
        <div>
          <p>Entrée Pokédex du Pokemon:</p>
          <input name="entry_number" />
        </div>
        <div>
          <p>Niveau du Pokémon</p>
          <input name="level" />
        </div>
      </div>
    </div>
  );
}
