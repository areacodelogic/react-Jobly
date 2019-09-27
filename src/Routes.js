import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import Company from "./Company";
import JobList from "./JobList";
import Profile from "./Profile";
import Login from "./Login";
import JoblyApi from "./JoblyApi";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      token: ""
    };
    this.loginToken = this.loginToken.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async loginToken(username, password) {
    let data = { username, password };
    let token = await JoblyApi.getLogin(data);
    localStorage.setItem('token', token);
    this.props.toggleLogin(username);
    this.setState({ currentUser: username, token });
  }

  async createUser(username, password, first_name, last_name, email ) {
    let data = {username, password, first_name, last_name, email };
    let token = await JoblyApi.createUser(data);
    localStorage.setItem('token', token);
    this.props.toggleLogin(username);
    this.setState({ currentUser: username, token });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/companies/' render={() => <CompanyList />} />
        <Route
          exact
          path='/companies/:name'
          render={props => <Company {...props} />} />
        <Route exact path='/jobs' render={() => <JobList />} />
        <Route exact path='/profile' render={() => <Profile />} />
        <Route
          exact
          path='/login'
          render={rtprops => <Login {...rtprops} loginToken={this.loginToken} createUser={this.createUser}/>} />
        <Redirect to='/login' />
      </Switch>
    );
  }
}

export default Routes;
