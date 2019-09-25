import React, { Component } from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import JoblyApi from "./JoblyApi";
import uuid from "uuid/v4";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.handleGet = this.handleGet.bind(this);
    this.renderJobs = this.renderJobs.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs });
    console.log(jobs)
  }

  async handleGet() {
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs });
  }

  renderJobs() {
    return (
      <div className='justify-content-center'>
        {this.state.jobs.map(job => (
          <JobCard
            key={uuid()}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Search />
        <div className="container">{this.renderJobs()}</div>
      </div>
    );
  }
}

export default JobList;
