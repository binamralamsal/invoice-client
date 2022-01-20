import React from "react";
import styles from "./Row.module.sass";
import cn from "classnames";
import Checkbox from "../../../../components/Checkbox";
import Control from "./Control";

const Row = ({ item, value, onChange, activeTable, activeId }) => {
  return (
    <>
      <div
        className={cn(
          styles.row,
          { [styles.selected]: activeId === item.id },
          { [styles.active]: activeTable }
        )}
      >
        <div className={styles.col}>
          <Checkbox
            className={styles.checkbox}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={styles.col}>
          <div className={styles.item}>
            <div className={styles.details}>
              <div className={styles.user}>{item.user}</div>
              <div className={styles.login}>{item.phoneNumber}</div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.email}>{item.address}</div>
        </div>
        <div className={styles.col}>
          <div className={cn("status-green-dark", styles.purchase)}>
            {item.gstNo}
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.lifetime}>
            <div className={styles.price}>{item.city}</div>
          </div>
        </div>
        <div className={styles.col}>{item.state}</div>
        <div className={styles.col}>
          <Control className={styles.control} />
        </div>
      </div>
    </>
  );
};

export default Row;
