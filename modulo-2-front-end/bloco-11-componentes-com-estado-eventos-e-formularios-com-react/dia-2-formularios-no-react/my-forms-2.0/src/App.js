import React from "react";
import DataContainer from "./components/DataContainer";
import JobHistory from "./components/JobHistory";
import PersonalInfo from "./components/PersonalInfo"; 
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: 'teste',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residence: '',
      cv: '',
      job: '',
      jobDescription: '',
    }
  }

  handleChange = ({ target }) => {
    const value = target === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value
    });
  }

  render() {
    return (
      <form>
        <PersonalInfo onChange={ this.handleChange } state={this.state}/>
        <JobHistory onChange={ this.handleChange } state={this.state}/>
        <DataContainer />
      </form>
    );
  }
}

export default App;
