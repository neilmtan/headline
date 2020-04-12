import React from "react";
import './Landing.css';
import { Component } from "react";

export default class Navbar extends Component {
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

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text-cont">
                    <div className="header-text">
                        <h1 className="header-title">{this.props.title}</h1>
                        <p className="header-subtitle">{this.props.subtitle}</p>
                    </div>
                </div>
                <div className="header-image-cont">
                    <img className="header-image" src={this.props.image}></img>
                </div>
            </div>
        );
    }
}

export default class Subheader extends Component {
    render() {
        return (
            <div className="subheader">
                <div className="subheader-text-cont">
                    <div className="subheader-text">
                        <h2 className="subheader-title">{this.props.title}</h2>
                        <p className="subheader-subtitle">{this.props.subtitle}</p>
                    </div>
                </div>
                <div className="subheader-image-cont">
                    <img className="subheader-image" src={this.props.image}></img>
                </div>
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

// export default { Navbar, Header, Subheader };