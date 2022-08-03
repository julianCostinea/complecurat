import React, { useContext } from "react";
import SideDrawerContext from "../../../store/SideDrawerContext";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import { MailIcon, PhoneIcon, PinIcon } from "../../UI/Icons/Icons";

import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
  const sideDrawerCtx = useContext(SideDrawerContext);
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (sideDrawerCtx.showMenu) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <DrawerToggle />
      <div
        className={attachedClasses.join(" ")}
        style={{ textAlign: "center" }}
      >
        <nav>
          <NavigationItems />
        </nav>
        <div className={classes.Footer}>
          <ul>
            <li>{PhoneIcon}0794.482.115 </li>
            <li>{MailIcon}office@completcurat.ro </li>
            <li>{PinIcon}Str. Campul Pipera 127 ap. 4 Bucuresti </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
