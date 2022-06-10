import React from 'react';

const compromissos = ['Acordar', 'Codar', 'Dormir'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
    const taskList = compromissos.map(Task)
    return <ul>{taskList}</ul>
  }
}
 
export default App;