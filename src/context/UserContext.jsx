import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      return {
        status: "error",
        error: error.response.data.message
          ? error.response.data.message
          : error.message,
      };
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/",
        { name, email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        error: error.response.data.message
          ? error.response.data.message
          : error.message,
      };
    }
  };

  return (
    <UserContext.Provider value={{ loginUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
