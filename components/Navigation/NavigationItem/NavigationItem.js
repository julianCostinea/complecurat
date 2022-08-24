import React, { useContext } from "react";
import SideDrawerContext from "../../../store/SideDrawerContext";
import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const router = useRouter();
  const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    /* <li className={`${classes.NavigationItem} ${sideDrawerCtx.showMenu ? classes.openPreview : null}`} id={"listItem"}></li> */
    <li className={classes.NavigationItem} id={"listItem"}>
      <Link href={props.link}>
        <a
          onClick={props.clicked}
          className={router.pathname == props.link ? classes.active : null}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
