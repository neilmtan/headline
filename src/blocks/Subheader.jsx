import React from "react";
import "./Blocks.css";
import { Component } from "react";

class Subheader extends Component {
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

export default Subheader;