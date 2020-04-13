import React from "react";
import "./Blocks.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-cont">
                    <li className="navbar-item"><Link to={this.props.link1to}>{this.props.link1}</Link></li>
                    <li className="navbar-item"><Link to={this.props.link2to}>{this.props.link2}</Link></li>
                    <li className="navbar-item"><Link to={this.props.link3to}>{this.props.link3}</Link></li>
                    <li className="navbar-item"><Link to={this.props.link4to}>{this.props.link4}</Link></li>
                    <li className="navbar-item"><Link to={this.props.link5to}>{this.props.link5}</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;