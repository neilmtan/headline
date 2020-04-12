import React from "react";
import { FlexRow, Container, EditCont } from "./shared/Shared";
import { Component } from "react";
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
      hdText: "",
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
            <SplitPane split="vertical" defaultSize={700} minSize={400}>
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
