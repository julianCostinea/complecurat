import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <button className={styles.Button}>
      <Link href={props.URLLink}>
        {props.children}
      </Link>
    </button>
  );
};

export default Button;
