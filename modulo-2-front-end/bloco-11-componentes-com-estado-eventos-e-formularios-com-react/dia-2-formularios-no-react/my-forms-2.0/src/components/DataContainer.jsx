import React from 'react';
import Button from './Button';

class DataContainer extends React.Component {
  render() {
    return (
      <div className='data-container-wrapper'>
        <Button 
          type='button'
          buttonText='Enviar Dados'
          className='send-data'
        />
        <Button 
          type='button'
          buttonText='Limpar Dados'
          className='clear-data'
        />
        <div className='dados'>

        </div>
      </div>
    )
  }
}

export default DataContainer;
