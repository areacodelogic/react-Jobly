import React, { Component, Fragment } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      handle: ""
    };
    this.renderJobs = this.renderJobs.bind(this);
  }

  async componentDidMount() {
    const handle = this.props.match.params.name;
    //company api call will return jobs => access jobs through data
    const jobs = await JoblyApi.getAllJobs();
    const companyJobs = jobs.filter(job => job.company_handle === handle);
    this.setState({ handle, jobs: companyJobs });
  }

  renderJobs() {
    return (
      <div className='justify-content-center'>
        {this.state.jobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        ))}
        ;
      </div>
    );
  }

  render() {
    const { name, desc } = this.props.location.state;

    return (
      <Fragment>
        <div className='row py-3'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <h3 className='text-left'>{name}</h3>
            <p className='text-left'>{desc}</p>
            <div className='col-sm-2'></div>
          </div>
        </div>
        {this.renderJobs()}
      </Fragment>
    );
  }
}

export default Company;
