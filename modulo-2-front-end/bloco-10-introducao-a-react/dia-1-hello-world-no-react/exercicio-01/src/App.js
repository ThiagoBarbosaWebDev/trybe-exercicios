import React from 'react';

// const compromissos = ['Acordar', 'Codar', 'Dormir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return Task(12);
  }
}
 
export default App;