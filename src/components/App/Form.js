import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      link: '',
      // obstacle: '',
      // stance: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewTrick(newTrick)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', link: ''});
  }

  render() {
    return (
      <form>
        <select>
          <option>Choose your Stance</option>
          <option>Regular</option>
          <option>Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange = {event => this.handleChange(event)}
        />

        <select>
          <option>Choose your Obstacle</option>
          <option>Flatground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
        </select>

        <input
          type='text'
          placeholder='Link to tutorial'
          name='link'
          value={this.state.link}
          onChange = {event => this.handleChange(event)}
        />

        <button onClick = {event => this.submitTrick(event)}>Send it!</button>
      </form>
    )
  }
}





export default Form;
