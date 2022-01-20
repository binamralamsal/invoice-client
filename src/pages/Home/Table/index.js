import React from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../../../components/Checkbox";
import Row from "./Row";

const Table = ({
  className,
  selectedCustomers,
  setSelectedCustomers,
  customers,
}) => {
  const handleChange = (id) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((x) => x !== id));
    } else {
      setSelectedCustomers((selectedCustomers) => [...selectedCustomers, id]);
    }
  };

  const handleSelectAllCustomers = () => {
    if (selectedCustomers.length === customers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(customers.map((x) => x._id));
    }
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.table)}>
        <div className={cn(styles.row)}>
          <div className={styles.col}>
            <Checkbox
              className={styles.checkbox}
              value={selectedCustomers.length === customers.length}
              onChange={handleSelectAllCustomers}
            />
          </div>
          <div className={styles.col}>Name</div>
          <div className={styles.col}>Address</div>
          <div className={styles.col}>Gst No.</div>
          <div className={styles.col}>City</div>
          <div className={styles.col}>State</div>
          <div className={styles.col}>Actions</div>
        </div>
        {customers.map((x, index) => (
          <Row
            item={x}
            key={index}
            value={selectedCustomers.includes(x._id)}
            onChange={() => handleChange(x._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
