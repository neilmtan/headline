import React, { Component } from 'react';
import firebase from "../firebase";

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.onClick = this.onClick.bind(this);
    }
  
    handleChange(e) {
      this.props.onChange(e);
    }
    
    onClick() {
      this.props.history.push("/editor");
    }

    render() {
      return (
          <div>
              <h1>Welcome</h1>
              <button onClick={this.onClick}>( + ) New site</button>
          </div>
      )
    }

}
export default Dashboard;