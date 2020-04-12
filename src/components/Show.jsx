import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";

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
    return (
      <Container>
        <TitleNav>
          <TitleView>View</TitleView>
          <button onClick={this.downloadFile}>Download</button>
        </TitleNav>
        <ShowArea>
          <p id="input">{this.props.value}</p>
        </ShowArea>
      </Container>
    );
  }
}

export default Show;
