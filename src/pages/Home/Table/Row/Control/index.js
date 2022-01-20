import React from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../../../components/Icon";

const Control = ({ className }) => {
  const actions = [
    {
      icon: "edit",
      action: () => console.log("edit"),
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