import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AuthenticationDetails.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";

const AuthenticationDetails = ({ className, customer, setCustomer }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Authentication Details"
      classTitle="title-green"
      head={
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/"
        >
          <Icon name="arrow-left" size="24" />
          <span>Back</span>
        </Link>
      }
    >
      <div className={styles.description}>
        <TextInput
          className={styles.field}
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter full name"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          value={customer.name}
          onChange={(event) =>
            setCustomer({ ...customer, name: event.target.value })
          }
          required
        />
        <div className={styles.group}>
          <TextInput
            className={styles.field}
            label="Username"
            name="username"
            type="text"
            placeholder="Enter username"
            tooltip="Maximum 100 characters. It must be unique than others"
            value={customer.username}
            onChange={(event) =>
              setCustomer({ ...customer, username: event.target.value })
            }
            required
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            tooltip="At least 8 characters required"
            value={customer.password}
            onChange={(event) =>
              setCustomer({ ...customer, password: event.target.value })
            }
            required
          />
        </div>
      </div>
    </Card>
  );
};

export default AuthenticationDetails;
