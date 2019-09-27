import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
    this.renderProfile = this.renderProfile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let user = await JoblyApi.getProfile(this.props.currentUser);
    this.setState({ first_name: user.first_name, last_name: user.last_name, email: user.email });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    const data = this.state ;
    let res = await JoblyApi.editProfile(this.props.currentUser, data);
    console.log(res)
    this.props.history.push("/companies");
  }

  renderProfile() {
    return (
      <div className='justify-content-start'>
        <div className='card card-profile'>
          <div className='card-body'>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <p>{this.state.username}</p>
              </div>
              <div className='form-group'>
                <label htmlFor='first_name'>First Name</label>
                <input
                  onChange={this.handleChange}
                  name='first_name'
                  placeholder={this.state.first_name}
                  type='text'
                  id='first_name'
                  value={this.state.first_name}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='last_name'>Last Name</label>
                <input
                  onChange={this.handleChange}
                  name='last_name'
                  placeholder={this.state.last_name}
                  type='text'
                  id='last_name'
                  value={this.state.last_name}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={this.handleChange}
                  name='email'
                  placeholder={this.state.email}
                  type='text'
                  id='email'
                  value={this.state.email}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Re-enter Password</label>
                <input
                  onChange={this.handleChange}
                  name='password'
                  type='password'
                  id='password'
                  value={this.state.password}></input>
              </div>
              <div className='form-group'>
                <button className='btn position-absolute' type='submit'>
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

export default Profile;
