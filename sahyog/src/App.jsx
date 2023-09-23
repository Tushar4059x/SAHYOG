import React, { Component } from 'react';
import logo from './sahyog-logo.svg';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Home></Home>
    );
  }
}

export default App;
 