import React, { useState } from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
import Icon from "../../../components/Icon";
import Modal from "../../../components/Modal";
import Delete from "../../../components/Delete";

const Panel = ({
  selectedCustomers,
  onDeleteUser,
  refresh,
  setSelectedCustomers,
}) => {
  const [showDelete, setShowDelete] = useState(false);

  const onDelete = async () => {
    await onDeleteUser();

    setShowDelete(false);
    setSelectedCustomers([]);
    refresh();
  };

  return (
    <div className={cn("panel", styles.panel)}>
      <Modal visible={showDelete} onClose={() => setShowDelete(false)}>
        <Delete onDelete={onDelete} />
      </Modal>
      <div className={styles.info}>
        <Icon name="check-all" size="24" />
        <span>{selectedCustomers.length} customers</span> selected
      </div>
      <button
        className={cn("button-stroke-red", styles.button)}
        onClick={() => setShowDelete(true)}
      >
        <span>Delete</span>
        <Icon name="trash" size="24" />
      </button>
    </div>
  );
};

export default Panel;
