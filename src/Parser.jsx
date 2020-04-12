import React, { Component } from "react";
import './Landing.css';
//import all blocks from Blocks.jsx
import Navbar from "./Blocks.jsx";
import Header from "./Blocks.jsx";
import Subheader from "./Blocks.jsx";

class Parser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "# Header [title] Family... [subtitle] Stop... [image] https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png",
            parts: []
        }
    }

    componentDidMount() {
        console.log("Component mounted!");
        this.setState({
            parts: this.state.text.split(" ")
        })
        console.log(this.state.parts);
        console.log(this.state.text);
        /*
        for (let i = 0; i < this.state.text.length; i++) {
            console.log("i is now " + i);
            if (this.state.text[i] == "#") {
                console.log("Found block!");
                i++;
            } else if (this.state.text[i] == "[") {
            console.log(this.state.tempBlock);
            if (this.state.tempBlock == "Navbar") {
                return <Navbar />;
            }
            if (this.state.tempBlock == "Header") {
                return <Header />;
            }
            if (this.state.tempBlock == "Subheader") {
                return <Subheader/>;
            }
            console.log("Block ended! Starting properties search...");

            } else if (this.state.text[i] == " ") {
                i++;
                console.log("Space bypassed...");
            } else {
                this.setState({
                    tempBlock: this.state.tempBlock + this.state.text[i]
                })
                console.log("Added " + this.state.tempBlock);
                console.log("");
            }
        }
        */
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default Parser;
