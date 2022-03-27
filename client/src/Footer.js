import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import snftr_logo from './images/SNFTR_ico_wh85.png';

function Footer() {

  return (
    <Container className="footer">
      <Row className="justify-content-center fixed-bottom mt-5" style={{color: "#9003a2"}}>
        <p><small>© 2022 Esoteric Productions</small></p>
      </Row>
    </Container>
  );
}

export default Footer;