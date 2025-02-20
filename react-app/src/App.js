import "./intro.css";

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
          <div className="justify-center">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" />
            <p>Mew</p>
            <p>151</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
