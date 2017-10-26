import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Content/>
      </div>
      </Router>
    );
  }
}

export default App;
