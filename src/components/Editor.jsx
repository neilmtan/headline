import React from "react";
import styled from "styled-components";
import { Component } from "react";

const EditorArea = styled.textarea`
  height: 100%;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 3px #999;
  font-size: 100%;
  line-height: inherit;
  padding: 8px 16px;
  resize: none;
  overflow: auto;
`;

class Editor extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <EditorArea rows={9}/>
        {/* <textarea className="editorBox"> */}

        {/* </textarea> */}
      </div>
    );
  }
}

export default Editor;
