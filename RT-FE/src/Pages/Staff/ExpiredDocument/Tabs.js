import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Immigration from "./TabsContect/Immigration";
import ExpiredDocument from "./TabsContect/ExpiredDocument";
import OfficialDocument from "./TabsContect/OfficialDocument";
export default function Tabs() {
    return(
        <Card>
          <Card.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="ExpiredDocment">
      <Row>
        <Col xl={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="ExpiredDocment">ExpiredDocument</Nav.Link>
                </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Immigration">Immigration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="OfficialDocument">OfficialDocument</Nav.Link>
              </Nav.Item>
            
            
            </Nav>
        
        </Col>
        <Col xl={9}>
        
            <Tab.Content>
                <Tab.Pane eventKey={"ExpiredDocment"} ><ExpiredDocument/> </Tab.Pane>
                <Tab.Pane eventKey={"Immigration"}><Immigration/></Tab.Pane>
                <Tab.Pane eventKey={"OfficialDocument"}><OfficialDocument/></Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </Card.Body>
        </Card>
    )
};
