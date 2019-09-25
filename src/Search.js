import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // check in Company list: will call searchCompanies
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="companyName" id ="companyName" placeholder="Search" value={this.state.name}/>
          <input type="submit" value="Search">
        </form>
      </div>
    )
  }
}

export default Search;
