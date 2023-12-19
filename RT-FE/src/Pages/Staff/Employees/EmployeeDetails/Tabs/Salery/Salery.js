import { useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import UpdateSalery from "./Tabs/UpdateSalery";

export default function Salery() {
  const [active, setActive] = useState("updateSalery");
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
                  <Nav.Link eventKey="updateSalery">Update Salery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="allowances">Allowances</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="commission">Commission</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="loan">Loan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="statutoryDeduction">
                    Statutiry Deduction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="otherPayment">Other Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="overtime">Overtime</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contribution">Contribution</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="share">Share Options</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} className="mt-4">
          <Tab.Content>
            {active === "updateSalery" && (
              <Tab.Pane eventKey={"updateSalery"}>
                <UpdateSalery />
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
