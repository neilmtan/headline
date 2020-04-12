import React from "react";
import { FlexRow, Container, EditCont } from "./shared/Shared";
import { Component } from "react";
import "./styles/Parent.css"
import Show from "./Show";
import Editor from "./Editor";
import styled from "styled-components";
import Header from "./Header";
import SplitPane from "react-split-pane";


import "./styles/split.css";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hdText: "# Header\n[title] Hello world!\n[subtitle] I love Pioneer!\n[image] https://miro.medium.com/proxy/1*xUwh4LT0F450udGz1pgpvA.jpeg",
    };

    this.onHDChange = this.onHDChange.bind(this);
  }

  onHDChange(text) {
    text.persist();
    this.setState({
      hdText: text.target.value,
    });
    console.log(this.state.hdText);
  }

  render() {
    return (
      <div>
        <Header />
        {/* <EditCont> */}
          <FlexRow>
            <SplitPane split="vertical" defaultSize={400} minSize={350}>
              <div>
                <Editor value={this.state.hdText} onChange={this.onHDChange} />
              </div>
              <div>
                <Show value={this.state.hdText} />
              </div>
            </SplitPane>
          </FlexRow>
        {/* </EditCont> */}
      </div>
    );
  }
}

export default Parent;
