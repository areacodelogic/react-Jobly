import React, { Component } from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import uuid from "uuid/v4";

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.handleGet = this.handleGet.bind(this);
    this.renderCompanies = this.renderCompanies.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  async handleGet() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  renderCompanies() {
    return (
      <div className='justify-content-center'>
        {this.state.companies.map(company => (
          <CompanyCard
            key={uuid()}
            name={company.name}
            desc={company.description}
            logo={company.logo}
            handle={company.handle}
          />
        ))}
      </div>
    );
  }

  async searchCompanies(search) {
    let jobs = await JoblyApi.getCompanies()
    //Figure out how to send data to api request
  }

  render() {
    return (
      <div>
        <Search />
        <div className="container" >{this.renderCompanies()}</div>
      </div>
    );
  }
}

export default CompanyList;
