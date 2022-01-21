import React, { useEffect, useState } from "react";
import styles from "./Home.module.sass";
import cn from "classnames";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Table from "./Table";
import Panel from "./Panel";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [refresh, setRefresh] = useState({}); // Just a work around to refresh tables when customer is deleted

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
  }, [refresh]);

  const handleSubmit = (e) => {
    alert();
  };

  const handleDeleteUser = async (data) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
        data: data,
      };

      await axios.delete("/api/customers/", config);
    } catch (error) {
      return error;
    }
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
                to="/customers/new"
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
            onDeleteUser={handleDeleteUser}
            refresh={() => setRefresh({})}
          />
        </div>
      </Card>
      {selectedCustomers.length > 0 && (
        <Panel
          selectedCustomers={selectedCustomers}
          onDeleteUser={() => handleDeleteUser(selectedCustomers)}
          setSelectedCustomers={setSelectedCustomers}
          refresh={() => setRefresh({})}
        />
      )}
    </>
  );
};

export default Home;
