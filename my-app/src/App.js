import CardList from "./components/CardList";
import CardContainer from "./components/CardContainer";
import { useState, useEffect } from "react";
import pic from './pokedex.png'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedPokemons(data.results);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1 className="title">
        <img src={pic}></img>
        <span>Who is this Pokemón?</span>
      </h1>

      <CardContainer>
        <CardList pokemons={loadedPokemons} />
      </CardContainer>
    </div>
  );
}

export default App;
