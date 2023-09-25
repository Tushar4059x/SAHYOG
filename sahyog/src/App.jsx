import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './screens/login';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
 