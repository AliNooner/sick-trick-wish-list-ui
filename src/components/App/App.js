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
      </main>
    )
  }
}

export default App;
