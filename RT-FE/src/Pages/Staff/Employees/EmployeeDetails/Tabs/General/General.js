import { useCallback, useEffect, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Basic from "./Tabs/Basic";
import useCustomEffect from "../../../../../../customHook/useCustomEffect";
import { toast } from "react-toastify";
import { getEmployeeDetailById } from "../../../../../../Utility/API/employee";
import moment from "moment/moment";

let dateFields = [
  "prEffectiveDate",
  "dateOfJoining",
  "dateOfLeaving",
  "confirmationDate",
  "DOB",
];
export default function General({ id }) {
  const [active, setActive] = useState("basic");
  const [data, setData] = useState(null);
  const getEmployeeDetails = useCallback(async (id) => {
    let res = await getEmployeeDetailById(id);
    if (res.status === 200) {
      let modifiedData = { ...res.data };
      dateFields.forEach((ele) => {
        if (modifiedData[ele])
          modifiedData[ele] = moment(modifiedData[ele]).format("YYYY-MM-DD");
      });
      setData(modifiedData);
    } else toast.error("error while fetching employee");
  }, []);

  useCustomEffect(getEmployeeDetails, id);
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
                  <Nav.Link eventKey="basic">Basic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="immigration">Immigration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="emergency">Emergency Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="social">Social Networking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="document">Documents</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="qualification">Qualication</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="workExp">Work Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bankAcc">Bank Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="changePass">Change Password</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="security">Security Level</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contract">Contract</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} className="mt-4">
          <Tab.Content>
            {active === "basic" && data && (
              <Tab.Pane eventKey={"basic"}>
                <Basic data={data} id={id} />
              </Tab.Pane>
            )}
            {active === "immigration" && (
              <Tab.Pane eventKey={"immigration"}>
                <div>immigration</div>
              </Tab.Pane>
            )}
            {active === "emergency" && (
              <Tab.Pane eventKey={"emergency"}>
                <div>emergency</div>
              </Tab.Pane>
            )}
            {active === "social" && (
              <Tab.Pane eventKey={"social"}>
                <div>social</div>
              </Tab.Pane>
            )}
            {active === "document" && (
              <Tab.Pane eventKey={"document"}>
                <div>document</div>
              </Tab.Pane>
            )}
            {active === "qualification" && (
              <Tab.Pane eventKey={"qualification"}>
                <div>qualification</div>
              </Tab.Pane>
            )}
            {active === "workExp" && (
              <Tab.Pane eventKey={"workExp"}>
                <div>workExp</div>
              </Tab.Pane>
            )}
            {active === "bankAcc" && (
              <Tab.Pane eventKey={"bankAcc"}>
                <div>bankAcc</div>
              </Tab.Pane>
            )}
            {active === "changePass" && (
              <Tab.Pane eventKey={"changePass"}>
                <div>changePass</div>
              </Tab.Pane>
            )}
            {active === "security" && (
              <Tab.Pane eventKey={"security"}>
                <div>security</div>
              </Tab.Pane>
            )}
            {active === "contract" && (
              <Tab.Pane eventKey={"contract"}>
                <div>contract</div>
              </Tab.Pane>
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
