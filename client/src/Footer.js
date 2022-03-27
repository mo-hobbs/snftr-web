import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container className="footer">
      <Row
        className="justify-content-center fixed-bottom mt-5"
        style={{ color: "#9003a2" }}
      >
        <p>
          <small>© 2022 Esoteric Productions</small>
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
