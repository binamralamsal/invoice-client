import React from "react";
import styles from "./Delete.module.sass";
import cn from "classnames";

const Delete = ({ className, onDelete }) => {
  return (
    <div className={cn(styles.schedule, className)}>
      <div className={cn("title-red", styles.title)}>Delete customer</div>
      <div className={styles.note}>
        Are you sure you want to delete selected customer? You won't be able to
        undo after deleting.
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Delete;
