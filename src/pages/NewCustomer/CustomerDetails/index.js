import React from "react";
import cn from "classnames";
import styles from "./CustomerDetails.module.sass";
import Card from "../../../components/Card";
import TextInput from "../../../components/TextInput";

const CustomerDetails = ({ className, customer, setCustomer }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Customer Details"
      classTitle="title-red"
    >
      <div className={styles.description}>
        <div className={cn(styles.group, styles.field)}>
          <TextInput
            className={styles.field}
            label="Phone Number"
            name="phoneNumber"
            type="number"
            placeholder="Enter Phone Number"
            min="1000000000"
            max="9999999999"
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
            tooltip="Maximum 200 characters. No HTML or emoji allowed"
            maxlength="200"
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
            type="number"
            placeholder="Enter GST Number"
            tooltip="Enter in 6 digits format"
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
            maxlength="100"
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
            maxlength="100"
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
