import React from "react";
import "./Blocks.css";
import { Component } from "react";

class Header extends Component {
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

export default Header;