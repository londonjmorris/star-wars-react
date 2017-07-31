import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      pilot: ''
    }

    this.props ? this.setState({ pilot: this.props.pilot }) : undefined;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.props.handleInput(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.pilot !== this.state.pilot ? this.setState({ pilot: nextProps.pilot }) : undefined;
  }

  render() {
    return (
      <form>
        <h3>What is your name, pilot?</h3>
        <input type='text' value={ this.props.value } onChange={ this.handleInput }/>
        <input type='submit' onClick={ this.handleSubmit }/>
        <p>{ this.state.pilot }</p>
      </form>
    )
  }
}
