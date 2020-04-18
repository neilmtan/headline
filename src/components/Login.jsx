import React, { Component } from "react";
import firebase from "../firebase";
import Landing from "../Landing";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDleIedTSDKYnzb9THsSPRKI85fmVCWrAU",
  authDomain: "headline-7ffd8.firebaseapp.com",
  databaseURL: "https://headline-7ffd8.firebaseio.com",
  projectId: "headline-7ffd8",
  storageBucket: "headline-7ffd8.appspot.com",
  messagingSenderId: "228188596809",
  appId: "1:228188596809:web:0bab44fe40da141aa9ed98",
  measurementId: "G-CYBSSJWVZ5",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
      console.log("submitted");
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        {this.state.error ? (
         <p>{this.state.error.message}</p>
       ) : null}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
