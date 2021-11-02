import React from "react";
import { Container, Spinner } from "react-bootstrap";

import { Wrapper } from "..";

const Loading = () => {
  return (
    <Wrapper>
      <Container>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    </Wrapper>
  );
};

export default Loading;
