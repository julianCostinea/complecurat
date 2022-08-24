import React, {useContext} from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import SideDrawerContext from "../../../store/SideDrawerContext";

import {HomeIcon, BuildingIcon, PersonIcon, PhoneIcon, InfoIcon} from "../../UI/Icons/Icons";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    <ul className={`${classes.NavigationItems}`}>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/">{HomeIcon} Acasa</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/privat">{PersonIcon} Privat</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/firma">{BuildingIcon} Firma</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/desprenoi">{InfoIcon} Despre&nbsp;Noi</NavigationItem>
      <NavigationItem clicked={sideDrawerCtx.hideSideDrawer} link="/contact">{PhoneIcon} Contact</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
