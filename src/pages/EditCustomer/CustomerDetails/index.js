import React from "react";
import cn from "classnames";
import styles from "./CustomerDetails.module.sass";
import Card from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";

const CustomerDetails = ({ className, customer, setCustomer }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Customer Details"
      classTitle="title-red"
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
        <div className={styles.field}>
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
        </div>
        <div className={cn(styles.group, styles.field)}>
          <TextInput
            className={styles.field}
            label="Phone Number"
            name="phoneNumber"
            type="number"
            placeholder="Enter Phone Number"
            tooltip="Phone number in normal format. (No International format)"
            value={customer.phoneNumber}
            onChange={(event) =>
              setCustomer({ ...customer, phoneNumber: event.target.value })
            }
            required
          />
          <TextInput
            className={styles.field}
            name="address"
            type="text"
            label="Address"
            placeholder="Enter Address"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            value={customer.address}
            onChange={(event) =>
              setCustomer({ ...customer, address: event.target.value })
            }
            required
          />
        </div>

        <div className={styles.group}>
          <TextInput
            className={styles.field}
            label="GST Number"
            name="gstNumber"
            type="text"
            placeholder="Enter GST Number"
            tooltip="Enter in 16 digits format"
            value={customer.gstNumber}
            onChange={(event) =>
              setCustomer({ ...customer, gstNumber: event.target.value })
            }
            required
          />
          <TextInput
            className={styles.field}
            name="city"
            type="text"
            label="City"
            placeholder="Enter City"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            value={customer.city}
            onChange={(event) =>
              setCustomer({ ...customer, city: event.target.value })
            }
            required
          />
          <TextInput
            className={styles.field}
            name="state"
            type="text"
            label="State"
            placeholder="Enter State"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            value={customer.state}
            onChange={(event) =>
              setCustomer({ ...customer, state: event.target.value })
            }
            required
          />
        </div>
      </div>
    </Card>
  );
};

export default CustomerDetails;
