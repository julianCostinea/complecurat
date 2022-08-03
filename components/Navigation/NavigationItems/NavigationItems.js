import React, {useContext} from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import SideDrawerContext from "../../../store/SideDrawerContext";


import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    <ul className={`${classes.NavigationItems}`}>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/">Privat</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/firma">Firma</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/desprenoi">Despre noi</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/contact">Contact</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
