import React from "react";
import cn from "classnames";
import styles from "./Tooltip.module.sass";
import Icon from "../Icon";

const Tooltip = ({ className, title, icon, place }) => {
  return (
    <div className={cn(styles.tooltip, className)}>
      <span data-tip={title} data-place={place}>
        <Icon name={icon} />
      </span>
    </div>
  );
};

export default Tooltip;
