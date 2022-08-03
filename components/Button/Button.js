import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <button className={styles.Button}>
      <a href={props.URLLink}>
        {props.children}
      </a>
    </button>
  );
};

export default Button;
