import React, { Component } from "react";
import styled from "styled-components";
import { TitleView, Container } from "./shared/Shared";

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
`;

class Show extends Component {
  render() {
    return (
      <Container>
        <TitleView>View</TitleView>
        <ShowArea>
          <p>{this.props.value}</p>
          <p>asdfasd</p>
        </ShowArea>
      </Container>
    );
  }
}

export default Show;
