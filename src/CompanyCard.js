import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
  render() {
    return (
      <Fragment>
      <div className='row py-2'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='card'>
            <div className='card-body'>
            <Link exact to={{
              pathname: `/companies/${this.props.handle}`,
              state: {
                handle: this.props.handle,
                name: this.props.name,
                desc: this.props.desc,
                logo: this.props.logo
              }}}>
              <h5 className='card-title text-left'>{this.props.name}</h5>
              <p className='card-text text-left'>{this.props.desc}</p>
            </Link>
            </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default CompanyCard;