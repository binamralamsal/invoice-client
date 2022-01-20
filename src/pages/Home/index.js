import React, { useEffect, useState } from "react";
import styles from "./CustomerList.module.sass";
import cn from "classnames";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Table from "./Table";
import Panel from "./Panel";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo")).token
            }`,
          },
        };

        const { data } = await axios.get("/api/customers/", config);

        setCustomers(data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("userInfo");
        window.location.reload();
      }
    };

    fetchCustomers();
  }, []);

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <>
      <Card
        className={styles.card}
        title="Customer"
        classTitle={cn("title-purple", styles.title)}
        classCardHead={styles.head}
        head={
          <>
            <Form
              className={styles.form}
              value={search}
              setValue={setSearch}
              onSubmit={() => handleSubmit()}
              placeholder="Search by name or username"
              type="text"
              name="search"
              icon="search"
            />
            <div className={styles.nav}>
              <Link
                to="/add-customer"
                className={cn("button-small", styles.button)}
              >
                Add Customer
              </Link>
            </div>
          </>
        }
      >
        <div className={cn(styles.row)}>
          <Table
            className={styles.table}
            customers={customers}
            selectedCustomers={selectedCustomers}
            setSelectedCustomers={setSelectedCustomers}
          />
        </div>
      </Card>
      {selectedCustomers.length > 0 && (
        <Panel selectedCustomers={selectedCustomers} />
      )}
    </>
  );
};

export default CustomerList;
