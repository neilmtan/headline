import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";
import "../Landing.css";
import Header from "../blocks/Header.jsx";
import Subheader from "../blocks/Subheader.jsx";
<<<<<<< HEAD
import Image from "../blocks/Image.jsx";
=======
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
>>>>>>> a3003a06978cbc948bcb0a205afce08debffb3cf

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
    };
  }

  downloadFile = () => {
    const element = document.createElement("a");
    // const file = new Blob([document.getElementById("input").textContent], {
    //   type: "text/html",
    // });
    // element.href = URL.createObjectURL(file);
    element.href =
      "data:text/plaintext," +
      document.getElementById("styling").textContent +
      document.getElementById("content").innerHTML;
    element.download = "myHeadline.txt";
    document.body.appendChild(element);
    element.click();

    // const element2 = document.createElement("a");
    // const file = new Blob([document.getElementById("styling").textContent], {
    //   type: "text/css",
    // });
    // element2.href = URL.createObjectURL(file);
    // // // element2.href =
    // // //   "data:text/css," + document.getElementById("styling").innerText;
    // element2.download = "myHeadline.css";
    // document.body.appendChild(element2);
    // element2.click();
  };

  render() {
    this.state.display = [];
    let tempObject = {
      tempType: "",
      tempTitle: "",
      tempSubtitle: "",
      tempImage: "",
      tempLink1: "",
      tempLink2: "",
      tempLink3: "",
      tempLink4: "",
      tempLink5: "",
    };
    let tempString = "";
    let parts = this.props.value
      .replace(/\n/g, " ")
      .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
      .split(" ");

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
          tempObject.tempType = "Subheader";
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
        if (parts[i] == "Image") {
          i++;
          tempObject.tempType = "Image";
          if (parts[i] == "[image]") {
            i++;
            tempObject.tempImage = parts[i];
          } else {
            tempObject.tempImage = "";
          }
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
        }
        if (parts[i] == "Navbar") {
          i++;
          tempObject.tempType = "Navbar";

          if (parts[i] == "[link1]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
                tempObject.tempLink1 = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempLink1 = "";
          }
          if (parts[i] == "[link2]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
                tempObject.tempLink2 = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempLink2 = "";
          }
          if (parts[i] == "[link3]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
                tempObject.tempLink3 = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempLink3 = "";
          }
          if (parts[i] == "[link4]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
                tempObject.tempLink4 = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempLink4 = "";
          }
          if (parts[i] == "[link5]") {
            i++;
            while (true) {
              if (i >= parts.length) {
                break;
              }
              if (parts[i][0] == "#" || parts[i][0] == "[") {
                tempObject.tempLink5 = tempString;
                tempString = "";
                break;
              } else {
                tempString += parts[i] + " ";
                i++;
              }
            }
          } else {
            tempObject.tempLink5 = "";
          }
        }

        this.state.display.push(tempObject);
      }
    }

    const styleGuy =
      "<head><style>body,html{margin:0;padding:0;font-family:Inter,sans-serif}.whole{margin:0;height:100%;width:100%}.navbar-cont{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;top:0;width:100%}.navbar-item{float:left}li a{display:block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none;font-size:1vw}li a:hover:not(.active){background-color:#111}.active{text-decoration:underline}li:first-child{padding-left:15%}li:last-child{padding-right:15%}.header{display:flex;justify-content:space-between;align-items:center;padding:5% 15%;background-color:#eee}.header-text-cont{flex-grow:1;display:flex;justify-content:space-evenly}.header-image-cont{flex-grow:1;display:flex;justify-content:space-evenly;padding:0 10vh}.header-image{width:30vw}.header-text{padding:0 10vh}.header-title{font-size:3vw;margin:0}.header-subtitle{font-size:1vw;line-height:175%}.subheader{display:flex;justify-content:space-evenly;align-items:center;padding:5% 15%;background-color:#fff}.subheader-text-cont{flex-grow:1;display:flex;justify-content:space-evenly}.subheader-image-cont{flex-grow:1;display:flex;justify-content:space-evenly;padding:0 10vh}.subheader-image{width:30vw}.subheader-text{padding:0 10vh}.subheader-title{font-size:2vw;margin:0}.subheader-subtitle{font-size:1vw;line-height:175%}@media only screen and (max-width:1200px){li:first-child,li:last-child{padding:0}.header,.subheader{padding:5% 0}}@media only screen and (max-width:992px){.header-title{font-size:5vw;margin:0}.header-subtitle{font-size:2vw;line-height:175%}.subheader-title{font-size:3vw;margin:0}.subheader-subtitle{font-size:2vw;line-height:175%}li a{font-size:2vw}}@media only screen and (max-width:600px){.header{display:block}.subheader{display:block}.header-title{font-size:10vw;margin:0}.header-subtitle{font-size:5vw;line-height:175%}.subheader-title{font-size:8vw;margin:0}.subheader-subtitle{font-size:5vw;line-height:175%}.header-image{width:100%;padding:20px 0}.subheader-image{width:100%;padding:30px 0}.header-text-cont{padding:30px 0}.subheader-text-cont{padding:30px 0}li a{font-size:5vw}}</style></head>";
    return (
      <Container>
        <TitleNav className="mini-cont">
          <TitleView className="view-cont">View</TitleView>
          <div className="download-button-cont">
            <button className="download-button" onClick={this.downloadFile}>
              <img
                className="download-button"
                src="https://lh3.googleusercontent.com/HNIvuL4rRSjxldDWQ2zUv-FAqftrRTs-_CguHK4AIpmentVtCGtSVywH0J8y8W5L-lOBZ0fUT0QJU0d17pda6Y8F31Y_BkmgT2MUe1djpoxlhzILsvmIYrVs1tjHm7wW5yD78cQp6r2aHumUrIhbeHeOJKs6rMIizH3ouHQrzgEm8zxiq1NV3TAmkuLH_-Nyc0AAQ9Xsvi09iv8jHeqGPauCCOMaH7weRQ2yykMpUkEnvPllslQsWxTUa5r_X6YE2LsQyVgKlWQWFi4NZsWQAeLJ9cwvb-NVIYgyxfkFcA1Fq4amP4KFd64AVadKs1kvnt1C1B1Lp6dKjrYqw7Nr1yxzWeyweRvI9r1ZXi_3QlAgxCOAQ34PhvJzOvijWtnlyUuISJZnsBSYcLf27uqPZkgTyrwRwOxZQMG4ehVnBErCpKz0p_jPFXIWdJiRGBrv7P3ZsEGI1fAZUd67EH-KBaYAXEvUsqwqe9T0z0W8adQgtjNtaqjz1ItDPfHXNOF-2lZWOPm9KZDYCvAxs5vo5gV02J_p5hdVAaL8I_HVNxMe2o7U1sdnl9EtxQLrMdZA3Qxt49G1edOiPtlulvqft1N69nYg__pDZm5IoVU6PhjiA2brRi86PgbZ2Hg_vn2mTsVbM39eSQ0c_gR8SlODS2syazXQq1IIdiJm-hwyA0f73npBEoyZUAWvh-8FWn-epVxGXR4vFcLXah_FL4SnEkBBiNcdeMDJcALfO70RsyUmo9gu-VavIQ=s512-no"
              ></img>
            </button>
          </div>
          <div id="styling">{styleGuy}</div>
        </TitleNav>
        <ShowArea className="show-area" id="content">
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
              )) || (disp.tempType == "Navbar" && (
                <Navbar
                  key={index}  
                  link1={disp.tempLink1}
                  link2={disp.tempLink2}
                  link3={disp.tempLink3}
                  link4={disp.tempLink4}
                  link5={disp.tempLink5}
                  />
              )) || (disp.tempType == "Image" && (
                <Image
                  key={index}  
                  image={disp.tempImage}
                  title={disp.tempTitle}
                  />
              ))

          )}
        </ShowArea>

        
      </Container>
    );
  }
}

export default Show;
