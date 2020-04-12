import React from "react";
import { Component } from "react";
import "./Landing.css";
import Navbar from "./blocks/Navbar.jsx";
import Header from "./blocks/Header.jsx";
import Subheader from "./blocks/Subheader.jsx";

class Parser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "# Header [title] Family finances made simple. [subtitle] Stop wasting time with messy spreadsheets and quickly get the insights you need. [image] https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png # Subheader [title] Family finances made simple. [subtitle] Stop wasting time with messy spreadsheets and quickly get the insights you need. [image] https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png # Subheader [title] Whamily... [subtitle] Stop... ",
      display: [],
    };
  }

  render() {
    let tempObject = {
      tempType: "",
      tempTitle: "",
      tempSubtitle: "",
      tempImage: "",
    };

    let tempString = "";
    let move = 0;

    let parts = this.state.text.split(" ");
    for (let i = 0; i < parts.length; i++) {
      tempObject = {};
      tempString = "";
      if (parts[i] == "#") {
        i++;
        if (parts[i] == "Header") {
          i++;
          tempObject.tempType = "Header";
          if (parts[i] == "[title]") {
            i++;
            while (true) {
              if (
                parts[i][0] == "#" ||
                parts[i][0] == "[" ||
                parts[i][0] == undefined
              ) {
                tempObject.tempTitle = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempTitle = "";
          }
          if (parts[i] == "[subtitle]") {
            i++;
            while (true) {
              if (
                parts[i][0] == "#" ||
                parts[i][0] == "[" ||
                parts[i][0] == undefined
              ) {
                tempObject.tempSubtitle = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempSubtitle = "";
          }
          if (parts[i] == "[image]") {
            i++;
            tempObject.tempImage = parts[i];
          } else {
            tempObject.tempImage = "";
          }
        }
        if (parts[i] == "Subheader") {
          i++;
          tempObject.tempType = "Subheader";
          if (parts[i] == "[title]") {
            i++;
            while (true) {
              if (
                parts[i][0] == "#" ||
                parts[i][0] == "[" ||
                parts[i][0] == undefined
              ) {
                tempObject.tempTitle = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempTitle = "";
          }
          if (parts[i] == "[subtitle]") {
            i++;
            while (true) {
              if (
                parts[i][0] == "#" ||
                parts[i][0] == "[" ||
                parts[i][0] == undefined
              ) {
                tempObject.tempSubtitle = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempSubtitle = "";
          }
          if (parts[i] == "[image]") {
            i++;
            tempObject.tempImage = parts[i];
          } else {
            tempObject.tempImage = "";
          }
        }

        this.state.display.push(tempObject);
      }
    }

    return (
      <div>
        {this.state.display.map(
          (disp, index) =>
            (disp.tempType == "Header" && (
              <Header
                key={index}
                title={disp.tempTitle}
                subtitle={disp.tempSubtitle}
                image={disp.tempImage}
              />
            )) ||
            (disp.tempType == "Subheader" && (
              <Subheader
                key={index}
                title={disp.tempTitle}
                subtitle={disp.tempSubtitle}
                image={disp.tempImage}
              />
            ))
        )}
      </div>
    );
  }
}

export default Parser;
