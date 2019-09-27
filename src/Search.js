import React, { Component } from "react";
import './Search.css';
import FontAwesome from 'react-fontawesome';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name ]: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.name);
    this.setState({ name: ""});
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} 
          className="form-inline active-pink-3 active-pink-4 position-relative" >
          <input name="name" 
            id ="companyName" 
            className="form-control form-control-sm w-100" placeholder="Search" 
            value={this.state.name} 
            onChange={this.handleChange} />
          <button className="btn position-absolute" 
            type="submit" 
            value="Search">
            <FontAwesome name="glass" 
              className="fa-search m-2" 
              aria-hidden="true" />
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
