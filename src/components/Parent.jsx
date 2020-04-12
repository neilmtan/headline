import React from "react";
import { FlexRow } from "./shared/Shared";
import { Component } from "react";
import Show from "./Show";
import Editor from "./Editor";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawText: "",
    }

    this.onRawTextChange = this.onRawTextChange.bind(this);
  }

  onRawTextChange(text) {
    this.setState({
      rawText: text
    });
    console.log(this.state.rawText);
  }

  render() {
    return (
      <div>
        <Header />

        <FlexRow>
          <Editor value={this.state.rawText} onChange={this.onRawTextChange} />
          <Show value={this.state.rawText}/>
        </FlexRow>
      </div>
    );
  }
}

export default Parent;
