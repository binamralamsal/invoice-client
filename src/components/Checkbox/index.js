import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.sass";

const Checkbox = ({
  className,
  classCheckboxTick,
  content,
  value,
  onChange,
  reverse,
}) => {
  return (
    <label
      className={cn(styles.checkbox, className, { [styles.reverse]: reverse })}
    >
      <input
        className={styles.input}
        type="checkbox"
        onChange={onChange}
        checked={value}
      />
      <span className={styles.inner}>
        <span className={cn(styles.tick, classCheckboxTick)}></span>
        {content && (
          <>
            <span
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: content }}
            ></span>
          </>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
