import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    // const links = this.props.dogs.map(dog => (
    //   <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
    //     {dog.name}
    //   </NavLink>
    // ));
    return (
      <nav className="nav">
        <NavLink exact to='/' className="nav-item">Jobly</NavLink>
        <ul>
          <NavLink exact to='/login' className="nav-item">Login</NavLink>
          <NavLink exact to='/companies' className="nav-item">Companies</NavLink>
          <NavLink exact to='/jobs' className="nav-item">Jobs</NavLink>
          <NavLink exact to='/profile' className="nav-item">Profile</NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
