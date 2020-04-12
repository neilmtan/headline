import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";
import '../Landing.css';
import Navbar from "../blocks/Navbar.jsx";
import Header from "../blocks/Header.jsx";
import Subheader from "../blocks/Subheader.jsx";

const ShowArea = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: 1px 1px 3px #999;
  font-size: 100%;
  line-height: inherit;
  padding: 8px 16px;
  resize: none;
  overflow: auto;
  white-space: pre-wrap;
`;

const TitleNav = styled.div`
  display: flex;
  flex-direction: row;
`;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
    }
  }


  downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").textContent], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element);
    element.click();
  };



  render() {
    this.state.display = [];
    let tempObject = {
      tempType: "",
      tempTitle: "",
      tempSubtitle: "",
      tempImage: "",
    }
    let tempString = "";
    let parts = this.props.value.replace(/\n/g, " ").replace(/^\s+|\s+$|\s+(?=\s)/g, "").split(" ");
    for (let i = 0; i < parts.length; i++) {
      tempObject = {}
      tempString = "";
      if (parts[i] == "#") {
        i++;
        if (parts[i] == "Header") {
          i++;
          tempObject.tempType = "Header"
          if (parts[i] == "[title]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
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
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
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
          tempObject.tempType = "Subheader"
          if (parts[i] == "[title]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
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
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
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
        console.log(parts);
        this.state.display.push(tempObject);
      }
    }

    return (
      <Container>
        <TitleNav className="mini-cont">
          <TitleView>View</TitleView>
          <button onClick={this.downloadFile}>Download</button>
        </TitleNav>
        <ShowArea id="input">
          {
            this.state.display.map(
              (disp, index) =>
                disp.tempType == "Header" &&
                <Header key={index} title={disp.tempTitle} subtitle={disp.tempSubtitle} image={disp.tempImage} /> ||
                disp.tempType == "Subheader" &&
                <Subheader key={index} title={disp.tempTitle} subtitle={disp.tempSubtitle} image={disp.tempImage} />
            )
          }
        </ShowArea>
      </Container>
    );
  }
}

export default Show;
