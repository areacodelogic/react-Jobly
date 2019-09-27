import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    
    this.renderNav = this.renderNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.toggleLogin();
  }

  renderNav() {
    if (!this.props.loggedIn) {
      return (<NavLink to='/login'
    className="nav-item"
        >Login</NavLink>)
    }
    else {
      return (
        <div>
        <NavLink exact to='/companies' className="nav-item">Companies</NavLink>
        <NavLink exact to='/jobs' className="nav-item">Jobs</NavLink>
        <NavLink exact to='/profile' className="nav-item">Profile</NavLink>
        <NavLink exact to='/' className="nav-item" onClick={this.handleLogin}>Logout</NavLink>
      </div>
      )
    }
  }
  
  render() {
    return (
      <nav className="nav">
        <NavLink exact to='/' className="nav-item">Jobly</NavLink>
        <ul>
          {this.renderNav()}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
