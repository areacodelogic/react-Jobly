import React, { Component } from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi"

class CompanyList extends Component {

  constructor(props){
      super(props);
      this.state = ({
        companies: []
      })
      this.handleGet = this.handleGet.bind(this);
  }

  async componentDidMount(){
    let companies = await JoblyApi.getCompanies();
    this.setState({
        companies: companies
    })

    console.log(this.state.companies);

  }

  async handleGet(){
    let companies = await JoblyApi.getCompanies()
    this.setState({
        companies: companies
    })
  }




  render() {
    
    return (
      <div>
        This is the Company List
        <CompanyCard />
        <Search />
      </div>
    );
  }
}

export default CompanyList;
