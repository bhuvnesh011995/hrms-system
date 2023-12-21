import { useCallback, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MainPage from "../../../../Components/Common/MainPage";
import General from "./Tabs/General/General";
import Profile from "./Tabs/Profile/Profile";
import Leave from "./Tabs/Leave/Leave";
import Salery from "./Tabs/Salery/Salery";
import Core from "./Tabs/Core/Core";
import Payslip from "./Tabs/Payslip/Payslip";
import Claim from "./Tabs/Claim/Claim";
import { useLocation, useNavigate } from "react-router-dom";
import { getEmployeeDetailById } from "../../../../Utility/API/employee";
import { toast } from "react-toastify";
import useCustomEffect from "../../../../customHook/useCustomEffect";

export default function EmployeeDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  if (!state.id) navigate(-1);

  const [key, setKey] = useState("general");

  return (
    <MainPage title={"Employee Details"}>
      <Tabs activeKey={key} onSelect={(key) => setKey(key)}>
        <Tab eventKey={"general"} title="General">
          {key === "general" && <General id={state.id} />}
        </Tab>
        <Tab eventKey={"profile"} title="profile">
          {key === "profile" && <Profile />}
        </Tab>
        <Tab eventKey={"salery"} title="salery">
          {key === "salery" && <Salery />}
        </Tab>
        <Tab eventKey={"leave"} title="leave">
          {key === "leave" && <Leave />}
        </Tab>
        <Tab eventKey={"core"} title="core">
          {key === "core" && <Core />}
        </Tab>
        <Tab eventKey={"payslip"} title="payslip">
          {key === "payslip" && <Payslip />}
        </Tab>
        <Tab eventKey={"claim"} title="claim">
          {key === "claim" && <Claim />}
        </Tab>
      </Tabs>
    </MainPage>
  );
}
