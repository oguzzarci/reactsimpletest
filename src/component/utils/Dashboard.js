import React, { Component } from "react";
import Navi from "../Navi/Navi";
import logo from "../../sdp.jpg";
import logo2 from "../../alogo.png";
import logo3 from "../../apple.png";
import { Card, Container, CardImg, Row, Col } from "react-bootstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Container style={{marginTop:'10%'}}>
          <Row>
            <Col>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header style={{ textAlign: "center" }}>SDP</Card.Header>
                <CardImg top width="100%" src={logo} />
              </Card>
            </Col>

            <Col>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header style={{ textAlign: "center" }}>Android</Card.Header>
                <CardImg top width="100%" src={logo2} />
              </Card>
            </Col>

            <Col>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header style={{ textAlign: "center" }}>IOS</Card.Header>
                <CardImg top width="100%" src={logo3} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
