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

        this.state.display.push(tempObject);
      }
    }

    return (
      <Container>
        <TitleNav className="mini-cont">
          <TitleView className="view-cont">View</TitleView>
          <div className="download-button-cont">
          <button className="download-button" onClick={this.downloadFile}><img className="download-button" src="https://lh3.googleusercontent.com/HNIvuL4rRSjxldDWQ2zUv-FAqftrRTs-_CguHK4AIpmentVtCGtSVywH0J8y8W5L-lOBZ0fUT0QJU0d17pda6Y8F31Y_BkmgT2MUe1djpoxlhzILsvmIYrVs1tjHm7wW5yD78cQp6r2aHumUrIhbeHeOJKs6rMIizH3ouHQrzgEm8zxiq1NV3TAmkuLH_-Nyc0AAQ9Xsvi09iv8jHeqGPauCCOMaH7weRQ2yykMpUkEnvPllslQsWxTUa5r_X6YE2LsQyVgKlWQWFi4NZsWQAeLJ9cwvb-NVIYgyxfkFcA1Fq4amP4KFd64AVadKs1kvnt1C1B1Lp6dKjrYqw7Nr1yxzWeyweRvI9r1ZXi_3QlAgxCOAQ34PhvJzOvijWtnlyUuISJZnsBSYcLf27uqPZkgTyrwRwOxZQMG4ehVnBErCpKz0p_jPFXIWdJiRGBrv7P3ZsEGI1fAZUd67EH-KBaYAXEvUsqwqe9T0z0W8adQgtjNtaqjz1ItDPfHXNOF-2lZWOPm9KZDYCvAxs5vo5gV02J_p5hdVAaL8I_HVNxMe2o7U1sdnl9EtxQLrMdZA3Qxt49G1edOiPtlulvqft1N69nYg__pDZm5IoVU6PhjiA2brRi86PgbZ2Hg_vn2mTsVbM39eSQ0c_gR8SlODS2syazXQq1IIdiJm-hwyA0f73npBEoyZUAWvh-8FWn-epVxGXR4vFcLXah_FL4SnEkBBiNcdeMDJcALfO70RsyUmo9gu-VavIQ=s512-no"></img></button>
          </div>
          <div id="styling">BLEHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
        </TitleNav>
        <ShowArea className="show-area">
          <table>
            <tr>
              <td>
          {
            this.state.display.map(
              (disp, index) =>
                disp.tempType == "Header" &&
                <Header key={index} title={disp.tempTitle} subtitle={disp.tempSubtitle} image={disp.tempImage} /> ||
                disp.tempType == "Subheader" &&
                <Subheader key={index} title={disp.tempTitle} subtitle={disp.tempSubtitle} image={disp.tempImage} />
            )
          }
          </td>
            </tr>
          </table>
        </ShowArea>
      </Container>
    );
  }
}

export default Show;
