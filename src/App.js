import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={Home}/>
          <Route path="/history" component={History}/>
        </div>
      </Router>
    );
  }
}

export default App;
