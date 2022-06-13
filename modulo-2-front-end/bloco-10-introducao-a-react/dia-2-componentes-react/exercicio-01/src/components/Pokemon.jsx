import React from "react";

class Pokemon extends React.Component {
  render() {
    const {image, name, type, averageWeight} = this.props.pokemons 
    return (
      <section className="card">
        <div className='card__name'>{name}</div>
        <div className='text'>{type}</div>
        <div className='text'>
          {averageWeight.value} {averageWeight.measurementUnit}
        </div>
        <img className='pkmn-img' src={image} alt={name}/>
      </section>
    )
  }
}

export default Pokemon;