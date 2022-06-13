import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const pokemonData = pokemons
    return (
      <main>
        <h1>POKEDEX</h1>
        <section className='pokedex'>
          {pokemonData.map(pkmn => <Pokemon key={pkmn.name} pokemons={pkmn}/>)}
        </section>
      </main>
    )
  }
}

export default Pokedex;