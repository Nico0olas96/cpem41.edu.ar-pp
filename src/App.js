import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

import IndexPrincipal from './Index Principal';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <IndexPrincipal />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
