import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";
import { MentionsInput, Mention } from "react-mentions";
import "./styles/Parent.css";

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
  outline: none;
`;

const BlockTypes = [
  {
    id: "header",
    display: "# Header\n",
  },
  {
    id: "subheader",
    display: "# Subheader\n",
  },
];

// const PropertyTypes = [
//   {
//     id: "title",
//     display: "[title] ",
//   },
//   {
//     id: "subtitle",
//     display: "[subtitle] ",
//   },
//   {
//     id: "image",
//     display: "[image] ",
//   },
// ];

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <Container>
        <TitleView className="mini-title">Editor</TitleView>
        <EditorArea
            placeholder="Start typing your Headline here!"
            value={this.props.value}
            onChange={this.handleChange}
          />

        {/* <MentionsInput
          className="EditorArea"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Start typing your Headline here!"        
          allowSpaceInQuery="true"
        >
          <Mention
            trigger="#"
            data={BlockTypes}
            // renderSuggestion={this.renderUserSuggestion}
          />
          <Mention
            trigger="["
            data={PropertyTypes}
            // renderSuggestion={this.renderTagSuggestion}
          />
        </MentionsInput> */}
      </Container>
    );
  }
}

export default Editor;
