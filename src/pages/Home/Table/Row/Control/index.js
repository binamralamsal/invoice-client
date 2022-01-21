import React, { useState } from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../../../components/Icon";
import { useNavigate } from "react-router-dom";
import Modal from "../../../../../components/Modal";
import Delete from "../../../../../components/Delete";

const Control = ({ className, id, onDeleteUser, refresh }) => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  const actions = [
    {
      icon: "edit",
      action: () => navigate(`/customers/edit/${id}`),
    },
    {
      icon: "trash",
      action: async () => setShowDelete(true),
    },
  ];

  const onDelete = async () => {
    await onDeleteUser([id]);

    setShowDelete(false);
    refresh();
  };

  return (
    <>
      <Modal visible={showDelete} onClose={() => setShowDelete(false)}>
        <Delete onDelete={onDelete} />
      </Modal>
      <div className={cn(styles.control, className)}>
        {actions.map((x, index) => (
          <button className={styles.button} key={index} onClick={x.action}>
            <Icon name={x.icon} size="20" />
          </button>
        ))}
      </div>
    </>
  );
};

export default Control;
