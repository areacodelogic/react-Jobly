import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
