import { useState } from "react";
import LeaveApplication from "./Tabs/LeaveApplication";
import SetLeaves from "./Tabs/SetLeaves";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

export default function Leave() {
  const [active, setActive] = useState("setLeave");
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
                  <Nav.Link eventKey="setLeave">Set Leave</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="leaveApp">Leave Application</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} className="mt-4">
          <Tab.Content>
            {active === "setLeave" && (
              <Tab.Pane eventKey={"setLeave"}>
                <SetLeaves />
              </Tab.Pane>
            )}
            {active === "leaveApp" && (
              <Tab.Pane eventKey={"leaveApp"}>
                <LeaveApplication />
              </Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
