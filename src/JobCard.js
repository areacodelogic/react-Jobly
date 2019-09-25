import React, { Component } from "react";

class JobCard extends Component {
  render() {
    return (
      <div className='row py-2'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-left'>{this.props.title}</h5>
              <p className='card-text text-left'>Salary: {this.props.salary}</p>
              <p className='card-text text-left'>Equity: {this.props.equity}</p>
              {/* <a href='#' class='btn btn-primary'>
            Go somewhere
          </a> */}
            </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}

export default JobCard;