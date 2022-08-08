import Carousel from "../components/UI/Carousel/Carousel";
import { PrivatPhoto } from "../components/UI/PrivatPhoto/PrivatPhoto";
import { FirmaPhoto } from "../components/UI/FirmaPhoto/FirmaPhoto";
import { HomeIcon, BuildingIcon } from "../components/UI/Icons/Icons";
import Link from "next/link";
import ContactFrom from "../components/ContactForm/ContactForm";

import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.Container}>
      <div className={classes.Intro}>
        <h1>Curatenie Profesionala</h1>
        <div className={classes.IntroLinks}>
          <Link href={"/privat"}>
            <div>
              <div className={classes.IntroLinksPhoto}>
                <PrivatPhoto />
              </div>
              <div className={classes.IntroLinksDetails}>
                <div>{HomeIcon}</div>
                <div>
                  <h4>Privat</h4>
                  <p>Ajutam in apartamente si case de toate dimensiunile</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/firma"}>
            <div>
              <div className={classes.IntroLinksPhoto}>
                <FirmaPhoto />
              </div>
              <div className={classes.IntroLinksDetails}>
                <div>{BuildingIcon}</div>
                <div>
                  <h4>Firma</h4>
                  <p>Clientii nostri sunt companii din toate industriile</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.Details}>
        <h1>
          PERSONALIZAM O SOLUTIE <span>PROFESIONALA</span> PENTRU DVS. SAU COMPANIA DVS
        </h1>
        <p>
          Dupa o serie de intrebari, am creat un pachet cuprinzator de asistenta profesionala pentru curatenie, care include atat curatenie privata,
          cat si curatenie comerciala. Avem mai multi clienti comerciali carora le facem atat curat in birouri, dar ne ocupam si de curatarea locuintelor tuturor angajatilor.
        </p>
        <p>
          Usuram treburile zilnice, indiferent de marime, cu un zambet, pentru ca tu sa ai timp si energie in viata de zi cu zi sau in afacerea ta.
          Daca vorbim de sarcini speciale, o vedem doar ca pe o provocare interesanta si educationala,
          asa ca va rugam sa nu ezitati sa contactati serviciul nostru pentru clienti daca aveti intrebari.
        </p>
      </div>
      <div className={classes.SatisfiedCustomers}>
        <h1>3 MOTIVE BUNE PENTRU A ALEGE C.C. CURATARE</h1>
        <div className={classes.infoContainer}>
          <div className={classes.infoDiv}>
            <h3>ANGAJATI FERICITI</h3>
            <p>Angajatul nostru este resursa noastra cea mai importanta pentru a obtine cele mai bune rezultate. De aceea acordam o mare importanta angajatilor fericiti!
              Ne asiguram intotdeauna sa fim inovatori si sa ne imbunatatim metodele de lucru. De asemenea, avem un contract colectiv si acordam o prioritate buna bunastarii angajatilor nostri.</p>
          </div>
          <div className={classes.infoDiv}>
            <h3>PARTENER PROFESIONAL</h3>
            <p>Peste 700 de clienti ne-au ales ca partener obisnuit in curatenie. Stim ca clientii nostri sunt diferiti si,
              prin urmare, ne concentram puternic pe nevoile si dorintele lor.</p>
          </div>
          <div className={classes.infoDiv}>
            <h3>CONSTIENTI DE MEDIU</h3>
            <p>Ne-am propus sa protejam mediul. Facem asta, printre altele prin utilizarea agentilor de curatare ecologici.
              In plus, toti angajatii nostri sunt instruiti in dozarea corecta a agentilor, precum si in metodele de protectie a mediului.
              Mijloacele noastre de transport sunt, de asemenea, ecologice.</p>
          </div>
        </div>
      </div>
      <div className={classes.Details}>
        <h1>
          <span>Ce spun clientii nostri:</span>
        </h1>
        <Carousel />
      </div>
      <div className={classes.Details}>
        <ContactFrom />
      </div>
    </div>
  );
}
