import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";

const navigation = [
  {
    title: "Customers",
    icon: "profile-circle",
    url: "/",
  },
];

const Sidebar = ({ className, onClose }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(styles.sidebar, className, { [styles.active]: visible })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo} to="/" onClick={onClose}>
          Invoice App
        </Link>
        <div className={styles.menu}>
          {navigation.map((x, index) =>
            x.url ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.active} ${styles.item}` : styles.item
                }
                // activeClassName={styles.active}
                to={x.url}
                key={index}
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown
                className={styles.dropdown}
                visibleSidebar={visible}
                setValue={setVisible}
                key={index}
                item={x}
                onClose={onClose}
              />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" />
          <Icon name="close" size="24" />
        </button>
        <div className={styles.foot}>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <div
        className={cn(styles.overlay, { [styles.active]: visible })}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
};

export default Sidebar;
