import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import Navbar from './Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('token') !== ''
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    let token = localStorage.getItem('token');
    if (token) {
      this.setState({ loggedIn: !this.state.loggedIn });
    } 
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar loggedIn={this.state.loggedIn} toggleLogin={this.toggleLogin}/>
          <Routes toggleLogin={this.toggleLogin}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
