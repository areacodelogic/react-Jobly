import React, { Component } from "react";
import "./Login.css";
import FontAwesome from "react-fontawesome";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      showSignup: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.login(this.state.name, this.state.password);
    this.setState({ ...this.state, name: "", password: "" });
  }

  showLogin(){
    console.log("enter")
    this.setState({ ...this.state, showSignup: false });
  };

  showSignup(evt){
    console.log("clickkk")
    this.setState({ ...this.state, showSignup: true });
  }

  // mouseLeave(){
  //   console.log('leave')
  //   this.setState({ ...this.state, isMouseInside: false });
  // };

  renderSignup() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input
            onChange={this.handleChange}
            name='firstname'
            placeholder='firstname'
            type='text'
            id='firstname'
            value={this.state.firstname}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Last Name</label>

          <input
            onChange={this.handleChange}
            name='lastname'
            placeholder='lastname'
            type='text'
            id='lastname'
            value={this.state.lastname}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>

          <input
            onChange={this.handleChange}
            name='email'
            placeholder='email'
            type='email'
            id='email'
            value={this.state.email}></input>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='container col-sm-6 col-md-8 col-lg-6'>
        <div className='d-flex justify-content-end'>
          <div
            className='btn-group login-btn'>
          
              <div>
                <input
                  className='btn btn-primary'
                  type='button'
                  onClick={this.showLogin}
                  value='Login'></input>
                <input
                  className='btn btn-primary'
                  type='button'
                  onClick={this.showSignup}
                  value='Sign Up'></input>
              </div>
          </div>
        </div>
        <div className='card card-login'>
          <div className='card-body'>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  onChange={this.handleChange}
                  name='name'
                  placeholder='name'
                  type='text'
                  id='name'
                  value={this.state.name}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='passwprd'>Password</label>

                <input
                  onChange={this.handleChange}
                  name='password'
                  placeholder='password'
                  type='text'
                  id='password'
                  value={this.state.password}></input>
              </div>
              {this.state.showSignup ? this.renderSignup() : null}
              <div className='form-group'>
                <button
                  className='btn position-absolute'
                  type='submit'
                  value='Search'>
                  LOGIN
                  <FontAwesome
                    name='glass'
                    className='fa-angle-double-right m-2'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
