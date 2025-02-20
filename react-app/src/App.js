import "./intro.css";
import Pokemon from "./components/Pokemon/Pokemon.tsx";

function App() {
  return (
    <>
      <div className="intro">
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, et attraper des
          pokemons !
        </div>
        <div>
          Commence par créer ton premier pokemon:
          <div>
            <Pokemon name="Mew" num={150} />
            <Pokemon name="Carapuce" num={7} />
            <Pokemon name="Salamèche" num={4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
