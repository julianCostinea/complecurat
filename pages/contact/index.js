import ContactForm from "../../components/ContactForm/ContactForm";
import * as Icons from "../../components/UI/Icons/Icons"

import classes from "./Contact.module.css";

export default function Contact() {
    return (
        <div className={classes.contact}>
            <div className={classes.infoContainer}>
                <div className={classes.infoDiv}>
                    {Icons.PinIcon}
                    <h3>CompletCurat</h3>
                    <p>Str. Olimpiadei nr 6, Oradea</p>
                </div>
                <div className={classes.infoDiv}>
                    {Icons.PhoneIcon}
                    <h3>Telefon</h3>
                    <p>0794.312.758</p>
                </div>
                <div className={classes.infoDiv}>
                    {Icons.MailIcon}
                    <h3>E-mail</h3>
                    <p>office@completcurat.ro</p>
                </div>
                <div className={classes.infoDiv}>
                    {Icons.ClockIcon}
                    <h3>Orar</h3>
                    <p>Luni – Vineri : 8.00 – 17.00 </p>
                </div>
            </div>
            <ContactForm />
        </div>
    );
}
