import React from "react";
import { FlexRow } from "./shared/Shared";
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

        <FlexRow>
          <SplitPane split="vertical" defaultSize={700}>
            <div className = "editor-panel">
              <Editor value={this.state.hdText} onChange={this.onHDChange} />
            </div>
            <div>
              <Show value={this.state.hdText} />
            </div>
          </SplitPane>
        </FlexRow>
      </div>
    );
  }
}

export default Parent;
