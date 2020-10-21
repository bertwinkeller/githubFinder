import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Users from './components/Users.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="container">
        <Users/>
        </div>
      </div>
    );
  }

}

export default App;
