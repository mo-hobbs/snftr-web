import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import google_play_button from "./images/get-it-on-google-play-button.png";
import app_store_button from "./images/download-on-app-store-button.png";

function Home() {
  const buttonSize = {
    width: "15em",
  };
  return (
    <Row className="mt-5">
      <h2>the SNFTR App</h2>
      <p>the best place to find, save, and share gifs</p>
      <Row className="mt-3">
        <Col>
          <Image
            src={google_play_button}
            style={buttonSize}
            alt="download the app on Google Play"
          ></Image>
        </Col>
        <Col>
          <Image
            src={app_store_button}
            alt="download the app on Apple Store"
            style={buttonSize}
          ></Image>
        </Col>
      </Row>
    </Row>
  );
}

export default Home;
