import React, { useState } from "react";
import styles from "./NewProduct.module.sass";
import AuthenticationDetails from "./AuthenticationDetails";
import TooltipGlodal from "../../components/TooltipGlodal";
import Panel from "./Panel";
import CustomerDetails from "./CustomerDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
    gstNumber: "",
    city: "",
    state: "",
  });
  const [error, setError] = useState(null);

  const handleAddCustomer = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      };

      await axios.post("/api/customers", customer, config);
      navigate("/");
    } catch (error) {
      setError(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <>
      <form method="POST" onSubmit={handleAddCustomer}>
        <AuthenticationDetails
          className={styles.card}
          customer={customer}
          setCustomer={setCustomer}
        />
        <CustomerDetails
          className={styles.card}
          customer={customer}
          setCustomer={setCustomer}
        />
        <Panel error={error} />
      </form>
      <TooltipGlodal></TooltipGlodal>
    </>
  );
};

export default NewProduct;
