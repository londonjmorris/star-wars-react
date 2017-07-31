import React, { Component } from 'react';
import '../styles/App.css';

import Jumbotron from './jumbotron';
import Form from './form';
import VehicleCard from './vehiclecard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(value) {
    this.setState({value});
  }

  handleSubmit(value) {
    this.setState({pilot: value});
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then((json) => {
      this.setState({ vehicles: json.results });
      console.log(json.results);
    });
  }

  render() {
    let vehicles = this.state.vehicles.map((vehicle) => {
      return <VehicleCard key={ vehicle.name } vehicle={ vehicle }/>
    });

    return (
      <div className="App container-fluid">
        <Jumbotron />
        <Form value={ this.state.value } pilot={ this.state.pilot } handleInput={ this.handleInput } handleSubmit={ this.handleSubmit }/>
        <div className='row'>{ vehicles }</div>
      </div>
    );
  }
}

export default App;
