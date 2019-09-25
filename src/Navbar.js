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
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/companies">Company List</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
      </nav>
    );
  }
}

export default Navbar;
