import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import TypeButton from './TypeButton';
import NextButton from './NextButton';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pkmnIndex: 0,
      filter: 'All',
    };
    this.renderNextPkmn = this.renderNextPkmn.bind(this);
    this.filterPkmnType = this.filterPkmnType.bind(this);
    this.makeFilterTypeButtons = this.makeFilterTypeButtons.bind(this);
  }

  fetchPkmnTypes = () => {
    const { pokemons } = this.props;
    const types = pokemons.map((pkmn) => pkmn.type);
    const typesSet = new Set(types);
    return [...typesSet];
  }

  renderNextPkmn = (data) => {
    const { pkmnIndex } = this.state;
    this.setState((prevState) => ({
      pkmnIndex: data[pkmnIndex + 1] ? prevState.pkmnIndex + 1 : 0,
    }));
  };

  filterPkmnType = (type = 'All') => this
    .setState(() => ({ pkmnIndex: 0, filter: type }));

  makeFilterTypeButtons = (pkmnTypes) => pkmnTypes
    .map((pkmnType) => (
      <TypeButton
        pkmnType={ pkmnType }
        key={ pkmnType }
        filterPkmnType={ this.filterPkmnType }
      />
    ))

  render() {
    const { pokemons } = this.props;
    const { pkmnIndex, filter } = this.state;
    const pkmnTypes = ['All', ...this.fetchPkmnTypes()];
    const filteredPkmns = filter !== 'All'
      ? pokemons.filter((pkmn) => pkmn.type === filter)
      : pokemons;
    const renderCurrentPkmn = filteredPkmns[pkmnIndex];
    const renderFilterButtons = this.makeFilterTypeButtons(pkmnTypes);
    return (
      <>
        <div className="pokedex">
          <Pokemon pokemon={ renderCurrentPkmn } />
        </div>
        <NextButton renderNextPkmn={ this.renderNextPkmn } data={ filteredPkmns } />
        <div>
          {renderFilterButtons}
        </div>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
