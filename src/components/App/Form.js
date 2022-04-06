import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      link: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name of Trick'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='Link to tutorial'
          value={this.state.link}
        />

        <button>Send it!</button>
      </form>
    )
  }
}





export default Form;
