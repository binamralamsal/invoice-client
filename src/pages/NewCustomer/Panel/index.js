import React from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
// import Icon from "../../../components/Icon";

const Panel = ({ error }) => {
  return (
    <div className={cn("panel", styles.panel)}>
      <div className={styles.info}>
        {/* <Icon name="check-all" size="24" /> */}
        {/* Fine, it can be <span>published</span> */}
        <span className={styles.error}>{error && error}</span>
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Create now</button>
      </div>
    </div>
  );
};

export default Panel;
