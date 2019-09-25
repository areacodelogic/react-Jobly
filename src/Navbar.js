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
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/login'>Login</NavLink>
        <NavLink exact to='/companies'>Company List</NavLink>
        <NavLink exact to='/jobs'>Jobs</NavLink>
        <NavLink exact to='/profile'>Profile</NavLink>
      </nav>
    );
  }
}

export default Navbar;
