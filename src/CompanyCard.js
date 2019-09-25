import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    return (
      <div className='row py-2'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-left'>{this.props.name}</h5>
              <p className='card-text text-left'>{this.props.desc}</p>
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

export default CompanyCard;
