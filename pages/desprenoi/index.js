import { DespreNoiPhoto } from "../../components/UI/DespreNoiPhoto/DespreNoiPhoto";
import * as Icons from "../../components/UI/Icons/Icons";
import Button from "../../components/Button/Button";

import classes from "./Desprenoi.module.css";

export default function Firma() {
  return (
    <div className={classes.Container}>
      <div className={classes.Intro}>
        <DespreNoiPhoto />
        <h1>Despre Noi</h1>
        <h2>Solutii de cea mai inalta calitate.</h2>
      </div>
      <div className={classes.Details}>
        <h1>
          <span>Viziunea</span> noastra
        </h1>
        <p>
          Viziunea noastra este sa fim o companie de curatenie personala care
          intelege, dezvolta si implementeaza solutii de cea mai inalta
          calitate. <br />
          Personalul nostru calificat este intotdeauna gata sa faca un efort
          pentru clientii nostri.
        </p>
      </div>
      <div className={classes.SatisfiedCustomers}>
        <div className={classes.infoContainer}>
          <div className={classes.infoDiv}>
            {Icons.PhoneIcon}
            <h3>0794.312.758</h3>
          </div>
          <div className={classes.infoDiv}>
            {Icons.MailIcon}
            <h3>office@completcurat.ro</h3>
          </div>
        </div>
      </div>
      <div className={classes.Details}>
        <h1>
          Angajatii <span>fericiti</span> curata mai bine
        </h1>
        <p>
          Desi viata noastra de zi cu zi este ocupata aici la CompletCurat, este
          important pentru noi sa avem timp pentru fiecare angajat. Ascultam
          atunci cand angajatii nostri au intrebari, sugestii sau contributii.
          Prin e-learning si cursuri interne, oferim angajatilor nostri cele mai
          bune conditii prealabile, astfel incat sa ne putem ridica la inaltimea
          asteptarilor clientilor.
        </p>
        <p>
          Gandirea este destul de simpla. La CompletCurat, credem ca angajatii
          fericiti sunt angajati buni - iar angajatii buni curata mai bine.
          Clientul poate simti asta.
        </p>
      </div>
      <div className={classes.Details}>
        <h1>SUNTETI BINEVENITI!</h1>
        <p>
          Noi, cei de la CompletCurat, am dori sa deschidem usile lumii noastre,
          astfel incat dumneavoastra, in calitate de client, sa aveti o
          experienta personala a serviciilor noastre. Ne descriem ca fiind o
          companie de curatenie moderna si responsabila, care pretuieste
          relatiile adecvate si deschiderea in serviciu.
        </p>
        <p>
          Contactati-ne pentru o discutie neobligatorie despre o colaborare.
        </p>
        <Button URLLink="/contact">CONTACT</Button>
      </div>
    </div>
  );
}
