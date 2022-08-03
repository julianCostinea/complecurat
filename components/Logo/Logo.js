import React from "react";
import Link from "next/link";

import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ cursor: "pointer" }}>
      <Link href="/" passHref>
        <a
          className={classes.LogoContainer}
        >
          <p>
            <strong>CompletCurat</strong>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
