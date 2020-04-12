import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="title-cont">
        <h1 className="title">Headline</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
