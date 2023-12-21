import { useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Awards from "./Tabs/Awards";

export default function Core() {
  const [active, setActive] = useState("awards");
  return (
    <Tab.Container
      activeKey={active}
      onSelect={(value) => setActive(value)}
      className="mt-3"
    >
      <Row>
        <Col xl={3} className="mt-4">
          <Card>
            <Card.Body>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="awards">Awards</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="travel">Travel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="transfer">Transfer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="promotion">Promotions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="compaints">Compaints</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="warning">Warnings</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} className="mt-4">
          <Tab.Content>
            {active === "awards" && (
              <Tab.Pane eventKey={"awards"}>
                <Awards />
              </Tab.Pane>
            )}
            {active === "leaveApp" && (
              <Tab.Pane eventKey={"leaveApp"}></Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
