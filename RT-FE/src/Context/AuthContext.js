import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import BASEURL from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const authContext = createContext();

const initialUser = {
  name: null,
  username: null,
  email: null,
  token: null,
};

let api, formApi;

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(initialUser);
  const [permissions, setPermissions] = useState([]);
  const [ready, setReady] = useState(false);
  async function getPermission() {
    try {
      if (user.token) {
        let response = await api.get("/permissions");
        console.log(response, "permissions");
        if (response.status === 200)
          return setPermissions(response.data.permission);
        else if (response.status === 201) return setPermissions([]);
      } else setPermissions([]);
    } catch (error) {
      console.log(error);
      if (error.response) {
        setPermissions([]);
      }
    }
    return;
  }

  const getUserDetails = useCallback(async (token) => {
    try {
      if (!token) return;
      let response = await axios.get(BASEURL + "/auth/user", {
        headers: { "x-access-token": token },
      });
      if (response.status === 200) setUser({ token, ...response.data });
      else {
        localStorage.removeItem("token");
        navigate("/login");
        toast.info("session expired login again");
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      toast.info("session expired login again");

      navigate("/login");
    } finally {
      setReady(true);
    }
  }, []);
  useEffect(() => {
    if (ready) {
      console.log(user);
      if (!user.token) console.log("3") || navigate("/login");
      else getPermission();
    } else getUserDetails(localStorage.getItem("token"));
  }, [user, ready]);

  let baseURL = BASEURL;
  const headers = {
    "x-access-token": user.token,
    "Content-Type": "application/json",
  };

  api = axios.create({
    baseURL,
    headers,
  });

  const fromHeaders = {
    "x-access-token": user.token,
    "Content-Type": "multipart/form-data",
  };

  formApi = axios.create({
    baseURL,
    headers: fromHeaders,
  });

  return (
    <authContext.Provider
      value={{ user, setUser, initialUser, permissions, setPermissions }}
    >
      {children}
    </authContext.Provider>
  );
}
const useAuth = () => useContext(authContext);

export { authContext, api, formApi, useAuth };
