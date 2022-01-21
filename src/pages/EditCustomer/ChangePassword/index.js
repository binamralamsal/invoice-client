import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./ChangePassword.module.sass";
import Card from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import Checkbox from "../../../components/Checkbox";

const ChangePassword = ({ className, customer, setCustomer }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleChange = () => {
    setShowChangePassword(!showChangePassword);
  };

  useEffect(() => {
    if (
      showChangePassword &&
      (customer.password.newPassword !== newPassword ||
        customer.password.currentPassword !== currentPassword)
    ) {
      setCustomer({
        ...customer,
        password: { newPassword, currentPassword },
      });
    }
  }, [currentPassword, newPassword, showChangePassword, customer, setCustomer]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Change Password"
      classTitle="title-green"
      classCardHead={!showChangePassword && styles.head}
      head={
        <Checkbox
          name="changePassword"
          value={showChangePassword}
          onChange={handleChange}
        />
      }
    >
      {showChangePassword && (
        <div className={styles.description}>
          <div className={styles.group}>
            <TextInput
              className={styles.field}
              label="Current Password"
              name="currentPassword"
              type="password"
              placeholder="Enter password"
              tooltip="At least 8 characters required"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
              required
            />
            <TextInput
              className={styles.field}
              name="newPassword"
              type="password"
              label="New Password"
              placeholder="Enter password"
              tooltip="At least 8 characters required"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              required
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default ChangePassword;
