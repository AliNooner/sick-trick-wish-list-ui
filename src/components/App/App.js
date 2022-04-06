// import { Component } from 'react';
// import './App.css';
//
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Sick Trick Wish List</h1>
//       </div>
//     );
//   }
// }
import React from 'react';
import './App.css'
import allTricksData from './APIcalls';
import Tricks from './Tricks';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTricks: [],
      hasError: false,
    }
  }

  componentDidMount = () => {
    return allTricksData()
      .then((data) => this.setState({allTricks: data}))
      .catch((error) =>
        this.setState({hasError:true, error: 'Oops! Something went wrong!'})
      );
  }

  render() {
    return (
      <main className='App'>
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks allTricks={this.state.allTricks}/>
      </main>
    )
  }
}

export default App;
