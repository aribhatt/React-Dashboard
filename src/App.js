import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-toolbox/lib/button/Button';
import Dashboard from './views/Dashboard';

class App extends Component {

  componentWillMount(){

  }

  render() {
    return (
      <div>
          <Dashboard/>
      </div>
    );
  }
}

export default App;
