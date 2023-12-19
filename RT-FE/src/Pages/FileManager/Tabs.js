import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

import { useEffect, useState } from "react";
import Tables from "./Tables";
import { getAllDepartments } from "../../Utility/API/department";
import { getAllDepartmentFiles } from "../../Utility/API/fileManager";

export default function TabOfCon() {
  const [departments, setDepartments] = useState([]);
  const [activeTab, setActiveTab] = useState("allDepartment");
  const [allDepartmentFiles, setAllDepartmentFiles] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    const response = await getAllDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    getDepartmentFiles();
  }, [activeTab]);

  const getDepartmentFiles = async () => {
    const data = await getAllDepartmentFiles(activeTab);
    if (data.status == 200) setAllDepartmentFiles(data.data);
  };

  return (
    <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
      <Row>
        <Col xl={3}>
          <Card>
            <Card.Body>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='allDepartment'>All Department</Nav.Link>
                </Nav.Item>
                {departments.map((department) => (
                  <Nav.Item>
                    <Nav.Link eventKey={department._id}>
                      {department.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Tab.Content>
            <Tab.Pane eventKey={"allDepartment"}>
              <Tables
                filesData={allDepartmentFiles}
                setFilesData={setAllDepartmentFiles}
              />
            </Tab.Pane>
            {departments.map(
              (department) =>
                activeTab === department._id && (
                  <Tab.Pane eventKey={department._id}>
                    <Tables
                      filesData={allDepartmentFiles}
                      setFilesData={setAllDepartmentFiles}
                    />
                  </Tab.Pane>
                ),
            )}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
