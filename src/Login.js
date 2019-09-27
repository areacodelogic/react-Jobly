import React, { Component } from "react";
import "./Login.css";
import FontAwesome from "react-fontawesome";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
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

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.showSignup){
      const { username, password, first_name, last_name, email } = this.state;
      await this.props.createUser(username, password, first_name, last_name, email);
    }
    else {
      await this.props.loginToken(this.state.username, this.state.password);
    }
    this.props.history.push('/companies');
  }

  showLogin(){
    this.setState({ ...this.state, showSignup: false });
  };

  showSignup(evt){
    this.setState({ ...this.state, showSignup: true });
  }
  
  renderSignup() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input
            onChange={this.handleChange}
            name='first_name'
            placeholder='First Name'
            type='text'
            id='firstname'
            value={this.state.first_name}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='last_name'>Last Name</label>
          <input
            onChange={this.handleChange}
            name='last_name'
            placeholder='Last Name'
            type='text'
            id='lastname'
            value={this.state.last_name}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={this.handleChange}
            name='email'
            placeholder='Email'
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
          <div className='btn-group login-btn'>
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
                <label htmlFor='username'>Username</label>
                <input
                  onChange={this.handleChange}
                  name='username'
                  placeholder='Username'
                  type='text'
                  id='username'
                  value={this.state.username}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  onChange={this.handleChange}
                  name='password'
                  placeholder='Password'
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
