import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";

const EditorArea = styled.textarea`
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
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hdText: "Start typing your Headline here!"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  updateText(e) {
    this.props.onChange(e);
    console.log(e);
  }

  handleChange(event) {
    this.setState({hdText: event.target.value});
  }

  render() {
    return (
      <Container>
        <TitleView>Editor</TitleView>
        <EditorArea placeholder="Start typing your Headline here!" value={this.state.hdText} onChange={this.handleChange}/>
      </Container>
    );
  }
}

export default Editor;
