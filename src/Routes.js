
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import Company from "./Company";
import JobList from "./JobList";
import Profile from "./Profile";
import Login from "./Login";




class Routes extends Component {
  render() {
      // +++ use for company filter+++
//     const dogListWithData = () => <DogList dogData={this.props.dogs} />;

//     const dogDetails = props => {
//       let name = props.match.params.name;
//       let currentDog = this.props.dogs.find(
//         dog => dog.name.toLowerCase() === name.toLowerCase()
//       );
//       return <DogDetails {...props} dog={currentDog} />;
//     };

    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/companies/" render={() => <CompanyList />} />
        <Route exact path="/companies/:name" render={props => <Company {...props} />} />
        <Route exact path="/jobs" render={() => <JobList />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/login" render={() => <Login />} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}

export default Routes;
