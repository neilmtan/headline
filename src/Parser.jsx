import React from "react";
import { Component } from "react";
import './Landing.css';
import Navbar from "./blocks/Navbar.jsx";
import Header from "./blocks/Header.jsx";
import Subheader from "./blocks/Subheader.jsx";

class Parser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "# Header [title] Family... [subtitle] pop... [image] https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png # Header [title] Family... [subtitle] Stop... [image] https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png",
            display: []
        }
    }

    // componentDidMount() {
    //     console.log("Component mounted!");
    //     let parts = this.state.text.split(" ");
    //     let tempString = "";
    //     for (let i = 0; i < parts.length; i++) {

    //         console.log("Current partition is: " + parts[i]);

    //         if (parts[i] == "#") {
    //             i++;
    //             console.log("Block found!");

    //             if(parts[i] == "Header"){
    //                 console.log("Block type is Header!");
    //                 i++;
    //                 return <makeHeader/>;
    //                 if(parts[i] == "[title]"){
    //                     i++;
    //                     console.log("Title is " + parts[i]);
    //                     this.state.navbar.push(parts[i]);
    //                     i++;
    //                 } else {
    //                     this.state.navbar.push("");
    //                     console.log("Pushed null...");
    //                 }
    //             }




    //         }
    //     }
    // }

    render() {
        let tempType = "";
        let tempTitle = "";
        let tempSubtitle = "";
        let tempImage = "";
        let tempObject = {
            tempType: "",
            tempTitle: "",
            tempSubtitle: "",
            tempImage: "",
        }
        let tempString = "";
        console.log("Component mounted!");
        let parts = this.state.text.split(" ");
        for (let i = 0; i < parts.length; i++) {
            console.log("Current partition is: " + parts[i]);
            if (parts[i] == "#") {
                i++;
                console.log("Block found!");
                if (parts[i] == "Header") {
                    console.log("Block type is Header!");
                    tempType = "header";
                    i++;
                    if (parts[i] == "[title]") {
                        i++;
                        console.log("Title is " + parts[i]);
                        tempTitle = parts[i];
                        i++;
                    } else {
                        console.log("Pushed title as null...");
                    }
                    if (parts[i] == "[subtitle]") {
                        i++;
                        console.log("Subtitle is " + parts[i]);
                        tempSubtitle = parts[i];
                        i++;
                    } else {
                        console.log("Pushed subtitle as null...");
                    }
                    if (parts[i] == "[image]") {
                        i++;
                        console.log("Image URL is " + parts[i]);
                        tempImage = parts[i];
                    } else {
                        console.log("Pushed subtitle as null...");
                    }
                    tempObject.tempTitle = tempType;
                    tempObject.tempTitle = tempTitle;
                    tempObject.tempSubtitle = tempSubtitle;
                    tempObject.tempImage = tempImage;
                    this.state.display.push(tempObject);
                }




            }
            console.log("finding next block...");
        }
        console.log(this.state.display);
        return (
            <div>
                {
                    this.state.display.map(
                        (disp, index) => <Header key={index} title={disp.tempTitle} subtitle={disp.tempSubtitle} image={disp.tempImage} />
                    )
                }
                {/* <Header title="hi"/>
                <Header title="hi"/> */}

            </div>
        );
    }
}

export default Parser;