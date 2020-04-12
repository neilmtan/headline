import React from "react";
import "./Blocks.css";
import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-cont">
                    <li className="navbar-item"><a>{this.props.link}</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;