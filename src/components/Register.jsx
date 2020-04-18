import React, { Component } from "react";
import firebase from "../firebase";
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

// // Instantiate a Firebase app.
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const uiConfig = {
//   signInFlow: "popup",
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// };

class Register extends Component {
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
        <h1>Register</h1>
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
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
