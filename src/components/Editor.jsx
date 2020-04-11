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

    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <Container>
        <TitleView>Editor</TitleView>
        <EditorArea placeholder="Start typing your Headline here!" />
        {/* <textarea className="editorBox"> */}

        {/* </textarea> */}
      </Container>
    );
  }
}

export default Editor;
