import React from "react";
import { MailIcon, ClockIcon, PhoneIcon, PinIcon, ArrowRightIcon } from "../UI/Icons/Icons";
import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footerMenu}>
      <h4>MENIU</h4>
      <ul>
        <li>{ArrowRightIcon}<a href="./">Privat</a></li>
        <li>{ArrowRightIcon}<a href="/firma">Firma</a></li>
        <li>{ArrowRightIcon}<a href="/desprenoi">Despre Noi</a></li>
        <li>{ArrowRightIcon}<a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div className={classes.footerAbout}>
      <h4>DESPRE NOI</h4>
      <p>
        CurataComplet este o companie cu baza in Oradea. Oferim servicii de curatenie atat companiilor cat si clientilor privati la un pret accesibil.</p>
      <button className={classes.ReadMoreButton} type="button">
        Citeste mai mult
      </button>
    </div>
    <div className={classes.footerSocial}>
      <h4>CONTACT</h4>
      <ul>
        <li>{PinIcon}Str. Olimpiadei nr 6, Oradea</li>
        <li>{PhoneIcon}0794.312.758 </li>
        <li>{MailIcon}office@completcurat.ro </li>
        <li>{ClockIcon}Luni – Vineri : 8.00 – 17.00 </li>
        <li>{ClockIcon}Weekend: Inchis </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
