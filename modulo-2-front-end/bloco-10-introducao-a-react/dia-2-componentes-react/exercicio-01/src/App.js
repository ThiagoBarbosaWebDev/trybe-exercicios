// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
        <Pokedex />
      </>
    );
  }
}

export default App;