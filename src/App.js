import { useState } from "react";
import Axios from "axios";

import "./App.css";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    id: "",
    type: "",
    height: "",
    weight: "",
    hp: "",
    atk: "",
    def: "",
    spd: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          img: response.data.sprites.other.home.front_default,
          id: response.data.id,
          type: response.data.types[0].type.name,
          height: Math.round(response.data.height * 3.937),
          weight: Math.round(response.data.weight * 0.2205),
          hp: response.data.stats[0].base_stat,
          atk: response.data.stats[1].base_stat,
          def: response.data.stats[2].base_stat,
          spd: response.data.stats[5].base_stat,
        });

        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <h1>National Pok&#233;dex</h1>
      <div className="pokedex">
        {/* Left Side */}
        <div className="left">
          <div className="left-lights">
            <div className="blue-light-container">
              <div className="blue-light" />
            </div>
            <div className="ryg-lights">
              <div className="red-light" />
              <div className="yellow-light" />
              <div className="green-light" />
            </div>
          </div>
          <div className="pokemon-screen-container">
            {!pokemonChosen ? (
              <div className="pokemon-screen" />
            ) : (
              <div className="pokemon-screen">
                <img src={pokemon.img} alt={pokemon.name} />
              </div>
            )}
          </div>
          <div className="left-buttons">
            <div className="black-circle" />
            <div className="left-middle-buttons">
              <div className="top-middle-buttons">
                <div className="red-button" />
                <div className="blue-button" />
              </div>
              <div className="green-screen">
                <p>{pokemon.name}</p>
              </div>
            </div>
            <div className="black-plus-container">
              <div className="black-plus" />
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="middle">
              <div className="line1" />
              <div className="line2" />
        </div>
        {/* Right Side */}
        <div className="right">
          {!pokemonChosen ? (
            <div className="info-display">
              <p>Please choose a Pok&#233;mon.</p>
            </div>
          ) : (
            <div className="info-display">
              <div className="name-number">
                <p>{pokemon.name}</p>
                <p>#{pokemon.id}</p>
              </div>
              <div className="info-stats">
                <div className="info">
                  <p>Primary Type: {pokemon.type}</p>
                  <p>Height: {pokemon.height} inches</p>
                  <p>Weight: {pokemon.weight} pounds</p>
                </div>
                <div className="stats">
                  <p>Base HP: {pokemon.hp}</p>
                  <p>Base Attack: {pokemon.atk}</p>
                  <p>Base Defense: {pokemon.def}</p>
                  <p>Base Speed: {pokemon.spd}</p>
                </div>
              </div>
            </div>
          )}
          <div className="right-middle-buttons">
            <div className="blue-charger">
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
              <div className="blue-square"/>
            </div>
            <div className="black-button-container">
              <div className="black-button" />
              <div className="black-button" />
            </div>
            <div className="right-middle-bottom-buttons">
              <div className="white-button-container">
                <div className="white-button" />
                <div className="white-button" />
              </div>
              <div className="yellow-button"/>
            </div>
          </div>
          <div className="bottom-input">
            <input
              type="text"
              placeholder="Type Pok&#233;mon's Name"
              onChange={(event) => {
                setPokemonName(event.target.value);
              }}
            />
            <button onClick={searchPokemon}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
