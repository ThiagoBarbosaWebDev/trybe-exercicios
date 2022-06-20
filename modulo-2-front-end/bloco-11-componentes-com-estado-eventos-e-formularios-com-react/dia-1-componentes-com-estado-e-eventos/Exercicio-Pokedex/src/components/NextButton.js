import React from 'react';
import PropTypes from 'prop-types';

class NextButton extends React.Component {
  render() {
    const { renderNextPkmn, data } = this.props;
    return (
      <button
        type="button"
        onClick={ () => renderNextPkmn(data) }
        disabled={ data.length <= 1 }
      >
        Próximo Pokemon
      </button>
    );
  }
}

NextButton.propTypes = {
  renderNextPkmn: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.string,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string,
    }),
  ).isRequired,
};

export default NextButton;
