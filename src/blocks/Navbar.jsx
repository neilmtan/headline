import React from "react";
import "./Blocks.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
                    <li className="navbar-item"><Link to={this.props.linkto}>{this.props.link}</Link></li>
        );
    }
}

export default Navbar;