import Carousel from "../components/UI/Carousel/Carousel";
import { HomePhoto } from "../components/UI/HomePhoto/HomePhoto";
import { PrivatPhoto } from "../components/UI/PrivatPhoto/PrivatPhoto";
import { FirmaPhoto } from "../components/UI/FirmaPhoto/FirmaPhoto";
import { HomeIcon, BuildingIcon } from "../components/UI/Icons/Icons";
import Link from "next/link";

import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.Container}>
      <div className={classes.Intro}>
        <HomePhoto />
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
        {/* START HERE */}
        <h1>
          Curatenie privata pentru <span>nevoile si dorintele</span>{" "}
          dumneavoastra
        </h1>
        <p>
          Sunteti pe maini complet sigure daca alegeti CompletCurat pentru a va
          mentine casa curata si prezentabila. Avem o vasta experienta cu
          ajutorul curateniei in case private si avem in prezent peste 1.000 de
          clienti fideli. Stim ca mutarea in casele private este o munca foarte
          responsabila, motiv pentru care nu facem niciodata compromisuri cu
          privire la valorile noastre fundamentale. Va tratam bunurile ca si cum
          ar fi ale noastre si puteti fi siguri ca suntem intotdeauna atenti
          cand ocolim toate colturile si colturile. Suntem ajutorul tau casnic.
        </p>
        <p>
          Te vei intalni cu echipa permanenta la prima curatenie privata, unde
          vei parcurge impreuna casa si programul de curatenie agreat.
          Amintiti-va ca suntem flexibili cu boala, vacante etc. si, prin
          urmare, puteti anula sau reprograma serviciul de curatenie in orice
          moment, in conformitate cu politica noastra de anulare. Recomandam
          clientilor nostri sa achizitioneze o curatare amanuntita de inceput,
          in care ne asiguram ca ajungem la capatul sarcinii, astfel incat
          exista un bun punct de plecare de la care sa incepem.
        </p>
      </div>
      <div className={classes.SatisfiedCustomers}>
        <div className={classes.SatisfiedCustomersData}>
          <h1>+700</h1>
          <h1>Clienti privati si comerciali</h1>
        </div>
        <div className={classes.SatisfiedCustomersData}>
          <h1>+3.000</h1>
          <h1>Curatari lunare</h1>
        </div>
      </div>
      <div className={classes.Details}>
        <h1>
          Servicii ecologice si <span>fara</span> perioada minima contractuala
        </h1>
        <p>
          Sunteti pe maini complet sigure daca alegeti CompletCurat pentru a va
          mentine casa curata si prezentabila. Avem o vasta experienta cu
          ajutorul curateniei in case private si avem in prezent peste 1.000 de
          clienti fideli. Stim ca mutarea in casele private este o munca foarte
          responsabila, motiv pentru care nu facem niciodata compromisuri cu
          privire la valorile noastre fundamentale. Va tratam bunurile ca si cum
          ar fi ale noastre si puteti fi siguri ca suntem intotdeauna atenti
          cand ocolim toate colturile si colturile. Suntem ajutorul tau casnic.
        </p>
        <p>
          Te vei intalni cu echipa permanenta la prima curatenie privata, unde
          vei parcurge impreuna casa si programul de curatenie agreat.
          Amintiti-va ca suntem flexibili cu boala, vacante etc. si, prin
          urmare, puteti anula sau reprograma serviciul de curatenie in orice
          moment, in conformitate cu politica noastra de anulare. Recomandam
          clientilor nostri sa achizitioneze o curatare amanuntita de inceput,
          in care ne asiguram ca ajungem la capatul sarcinii, astfel incat
          exista un bun punct de plecare de la care sa incepem.
        </p>
      </div>
      <div className={classes.Details}>
        <h1>
          <span>Ce spun clientii nostri:</span>
        </h1>
        <Carousel />
      </div>
    </div>
  );
}
