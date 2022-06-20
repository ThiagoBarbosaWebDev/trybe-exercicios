import React from 'react';
import PropTypes from 'prop-types';

class TypeButton extends React.Component {
  render() {
    const { filterPkmnType, pkmnType } = this.props;
    return (
      <button
        type="button"
        onClick={ () => filterPkmnType(pkmnType) }
      >
        {pkmnType}
      </button>
    );
  }
}

TypeButton.propTypes = {
  pkmnType: PropTypes.string.isRequired,
  filterPkmnType: PropTypes.func.isRequired,
};

export default TypeButton;
