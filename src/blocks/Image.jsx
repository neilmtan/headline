import React from "react";
import "./Blocks.css";
import { Component } from "react";

class Image extends Component {
    render() {
        return (
            <div className="image-cont">
                <img className="image" src={this.props.image}></img>
                <p className="image-caption">{this.props.title}</p>
            </div>
        );
    }
}

export default Image;