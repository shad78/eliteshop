import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; EliteShop by Asif
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
