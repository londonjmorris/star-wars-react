import React, { Component } from 'react';

export default class VehicleCard extends Component {

  render() {
    let vehicle = this.props.vehicle;
    return (
      <div className="col-sm-4">
        <div className='card'>
          <div className='card-block'>
            <h3 className="card-title">Vehicle: {vehicle.name}</h3>
            <h5>Model: {vehicle.model}</h5>
            <ul className="list-group">Specs
              <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
              <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
              <li className="list-group-item">Passengers: {vehicle.passengers}</li>
              <li className="list-group-item">Crew: {vehicle.crew}</li>
              <li className="list-group-item">Length: {vehicle.length}</li>
              <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
