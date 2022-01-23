import React from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../../../components/Checkbox";
import Row from "./Row";
import Icon from "../../../components/Icon";
import { useSearchParams } from "react-router-dom";

const Table = ({
  className,
  selectedCustomers,
  setSelectedCustomers,
  customers,
  onDeleteUser,
  refresh,
  pageNumber,
  totalPages,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || null;

  const params = searchQuery ? { search: searchQuery } : {};

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
              value={
                customers.length > 0
                  ? selectedCustomers.length === customers.length
                  : false
              }
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
            onDeleteUser={onDeleteUser}
            refresh={refresh}
          />
        ))}
      </div>
      <div className={styles.foot}>
        {+pageNumber > 1 && (
          <button
            className={styles.arrow}
            onClick={() =>
              setSearchParams({ ...params, page: +pageNumber - 1 })
            }
          >
            <Icon name="arrow-left" size="20" />
          </button>
        )}
        {+pageNumber < totalPages && (
          <button
            className={styles.arrow}
            onClick={() =>
              setSearchParams({ ...params, page: +pageNumber + 1 })
            }
          >
            <Icon name="arrow-right" size="20" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;
