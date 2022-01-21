import React, { useEffect, useState } from "react";
import styles from "./EditCustomer.module.sass";
import ChangePassword from "./ChangePassword";
import TooltipGlodal from "../../components/TooltipGlodal";
import Panel from "./Panel";
import CustomerDetails from "./CustomerDetails";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    gstNumber: "",
    city: "",
    state: "",
    password: false,
  });
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo")).token
            }`,
          },
        };

        const { data } = await axios.get(`/api/customers/${id}`, config);

        setCustomer({
          name: data.user.name,
          phoneNumber: data.phoneNumber,
          address: data.address,
          gstNumber: data.gstNumber,
          city: data.city,
          state: data.state,
          password: false,
        });
      } catch (error) {
        navigate("/");
      }
    };

    fetchCustomer();
  }, [id, navigate]);

  const handleEditCustomer = async (event) => {
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

      await axios.put(`/api/customers/${id}`, customer, config);
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
      <form method="POST" onSubmit={handleEditCustomer}>
        <CustomerDetails
          className={styles.card}
          customer={customer}
          setCustomer={setCustomer}
        />
        <ChangePassword
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

export default EditCustomer;
