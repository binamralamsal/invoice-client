import React, { useState } from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Checkbox from "../../../components/Checkbox";
import Row from "./Row";

const Table = ({ className, activeTable, setActiveTable }) => {
  const customers = [
    {
      id: 0,
      user: "Chelsie Haley",
      phoneNumber: "+91-879-879-879",
      address: "Nepal",
      gstNo: 23456789,
      city: "Pokhara",
      state: "Gandaki",
    },
    {
      id: 1,
      user: "Filomena Fahey",
      phoneNumber: "+91-879-879-879",
      address: "India",
      gstNo: 3456789,
      city: "Mumbai",
      state: "Maharashtra",
    },
  ];

  const [chooseAll, setСhooseAll] = useState(false);
  const [activeId, setActiveId] = useState(customers[0].id);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.table)}>
        <div className={cn(styles.row, { [styles.active]: activeTable })}>
          <div className={styles.col}>
            <Checkbox
              className={styles.checkbox}
              value={chooseAll}
              onChange={() => setСhooseAll(!chooseAll)}
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
            activeTable={activeTable}
            setActiveTable={setActiveTable}
            activeId={activeId}
            setActiveId={setActiveId}
            value={selectedFilters.includes(x.id)}
            onChange={() => handleChange(x.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
