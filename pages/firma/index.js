import Carousel from "../../components/UI/Carousel/Carousel";

import classes from "./Firma.module.css";

export default function Firma() {
  return (
    <div className={classes.Container}>
      <div className={classes.Intro}>
        <h1>Curatenie Comerciala</h1>
        <h2>Creeaza un mediu de lucru sanatos</h2>
      </div>
      <div className={classes.Details}>
        <h1>
          Curatenia comerciala creeaza un <span>mediu de lucru sanatos</span>
        </h1>
        <p>
          Sunteti pe deplin concentrati pe crearea de valoare pentru afacerea
          dvs.? Eficienta, creativitatea si colaborarea sunt concepte importante
          la locul de munca si este alfa omega, faptul ca imprejurimile sunt
          ingrijite, prezentabile si, nu in ultimul rand, curate. Potrivit
          Autoritatii de Inspectie a Muncii, pericolele climatice interioare
          pentru angajati pot aparea rapid daca nu se pune accent pe curatarea
          comerciala eficienta, continua si ecologica. Prin urmare, un climat
          interior bun este esential pentru un mediu de lucru sanatos si, prin
          urmare, pentru angajati fericiti si eficienti.
        </p>
        <p>
          La CompleCurat, responsabilitatea este una dintre valorile noastre de
          baza. Responsabilitate in legatura cu faptul ca suntem atenti si
          respectuosi cu birourile pe care le curatam - dar la fel de
          responsabili in raport cu faptul ca mentinem un climat interior
          sanatos cu agenti de curatare prietenosi cu mediul. Lasati-ne pe noi
          sa ne ocupam de curatenia in compania voastra - si voi va puteti
          concentra pe afacere.
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
          OBTINETI O <span>SOLUTIE COMPLETA</span> PENTRU COMPANIE SI ANGAJATI
        </h1>
        <p>
          Cu multi ani de experienta in curatenia comerciala, flexibilitatea
          noastra este echipata pentru a face fata oricarei cereri. O solutie
          care devine din ce in ce mai atractiva este rasfatarea angajatilor
          pentru a le facilita profiturile si motivatia. Solutia este ca curatam
          atat zonele din companie, dar si locuintele personale ale angajatilor.
          Indiferent ce fel de solutie doriti, fie ca este vorba doar de firma
          sau de curatenie privata, suntem pregatiti sa personalizam o solutie
          exact in functie de dorintele dumneavoastra.
        </p>
        <p>
          Angajatii nostri beneficiaza atat de cursuri, cat si de formare
          continua, deci sunt profesionisti de top si extrem de constienti de
          calitate – si sunt intotdeauna pregatiti pentru dialog daca exista
          ceva ce doriti diferit pe parcurs. Voi sunteti cei care trebuie sa fie
          multumiti de curatenie - de aceea increderea si deschiderea sunt
          foarte importante pentru noi. Daca aveti nevoie de noi sa ne ocupam de
          curatenia in compania dumneavoastra, putem fi contactati la telefon
          0794.312.758 sau trimiteti un e-mail la office@complecurat.ro.
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
