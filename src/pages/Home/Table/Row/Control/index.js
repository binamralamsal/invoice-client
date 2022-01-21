import React from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../../../components/Icon";
import { useNavigate } from "react-router-dom";

const Control = ({ className, id }) => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: "edit",
      action: () => navigate(`/customers/edit/${id}`),
    },
    {
      icon: "trash",
      action: () => console.log("delete"),
    },
  ];

  return (
    <>
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
