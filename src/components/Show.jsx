import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";
import '../Landing.css';
import Navbar from "../blocks/Navbar.jsx";
import Header from "../blocks/Header.jsx";
import Subheader from "../blocks/Subheader.jsx";

const ShowArea = styled.div`
  height: 100%;
  width: 80%;
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
    let parts = this.props.value.split(" ");
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
        <TitleView>View</TitleView>
        <button onClick={this.downloadFile}>Download</button>
        <ShowArea>
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

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

export default Show;
