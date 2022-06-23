import React from "react";
import DataContainer from "./components/DataContainer";
import JobHistory from "./components/JobHistory";
import PersonalInfo from "./components/PersonalInfo"; 
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <PersonalInfo />
        <JobHistory />
        <DataContainer />
      </form>
    );
  }
}

export default App;
