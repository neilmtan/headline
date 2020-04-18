import React, { Component } from "react";
import firebase from "../firebase";
import { withRouter } from 'react-router-dom';

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser() {
    console.log("user has been logged out!");
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/");
      });
  }
  render() {
    return <button onClick={this.logOutUser}>Log Out</button>;
  }
}

export default withRouter(LogOut) ;
