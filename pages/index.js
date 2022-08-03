import { PrivatPhoto } from "../components/UI/PrivatPhoto/PrivatPhoto";

import classes from "./privat/Privat.module.css";

export default function Privat() {
    return (
        <div className={classes.Container}>
            <div className={classes.Intro}>
                <PrivatPhoto />
                <h1>
                    Curatenie Privata
                </h1>
                <h2>Iti lipseste timpul necesar lucrurilor cu adevarat importante?</h2>
            </div>
            <div className={classes.Details}>
                <h1>
                    Curatenie privata pentru <span>nevoile si dorintele</span> dumneavoastra
                </h1>
                <p>Sunteti pe maini complet sigure daca alegeti CompletCurat pentru a va mentine casa curata si prezentabila.
                    Avem o vasta experienta cu ajutorul curateniei in case private si avem in prezent peste 1.000 de clienti fideli.
                    Stim ca mutarea in casele private este o munca foarte responsabila, motiv pentru care nu facem niciodata compromisuri cu privire la valorile noastre fundamentale.
                    Va tratam bunurile ca si cum ar fi ale noastre si puteti fi siguri ca suntem intotdeauna atenti cand ocolim toate colturile si colturile. Suntem ajutorul tau casnic.
                </p>
                <p>
                    Te vei intalni cu echipa permanenta la prima curatenie privata, unde vei parcurge impreuna casa si programul de curatenie agreat.
                    Amintiti-va ca suntem flexibili cu boala, vacante etc. si, prin urmare, puteti anula sau reprograma serviciul de curatenie in orice moment,
                    in conformitate cu politica noastra de anulare.
                    Recomandam clientilor nostri sa achizitioneze o curatare amanuntita de inceput, in care ne asiguram ca ajungem la capatul sarcinii,
                    astfel incat exista un bun punct de plecare de la care sa incepem.</p>
            </div>
            <div className={classes.SatisfiedCustomers}>
                <div className={classes.SatisfiedCustomersData}>
                    <h1>
                        +700
                    </h1>
                    <h1>
                        Clienti privati
                    </h1>
                </div>
                <div className={classes.SatisfiedCustomersData}>
                    <h1>
                        +3.000
                    </h1>
                    <h1>
                        Curatari lunare
                    </h1>
                </div>
            </div>
            <div className={classes.Details}>
                <h1>
                    Servicii ecologice si <span>fara</span> perioada minima contractuala
                </h1>
                <p>Sunteti pe maini complet sigure daca alegeti CompletCurat pentru a va mentine casa curata si prezentabila.
                    Avem o vasta experienta cu ajutorul curateniei in case private si avem in prezent peste 1.000 de clienti fideli.
                    Stim ca mutarea in casele private este o munca foarte responsabila, motiv pentru care nu facem niciodata compromisuri cu privire la valorile noastre fundamentale.
                    Va tratam bunurile ca si cum ar fi ale noastre si puteti fi siguri ca suntem intotdeauna atenti cand ocolim toate colturile si colturile. Suntem ajutorul tau casnic.
                </p>
                <p>
                    Te vei intalni cu echipa permanenta la prima curatenie privata, unde vei parcurge impreuna casa si programul de curatenie agreat.
                    Amintiti-va ca suntem flexibili cu boala, vacante etc. si, prin urmare, puteti anula sau reprograma serviciul de curatenie in orice moment,
                    in conformitate cu politica noastra de anulare.
                    Recomandam clientilor nostri sa achizitioneze o curatare amanuntita de inceput, in care ne asiguram ca ajungem la capatul sarcinii,
                    astfel incat exista un bun punct de plecare de la care sa incepem.</p>
            </div>
            <div className={classes.Details}>
                <h2>
                    Private details
                </h2>
                <p>Cillum minim in fugiat sit nostrud excepteur mollit ad consectetur elit et irure aliqua. Eu incididunt officia nostrud tempor consequat nisi. Cillum minim commodo excepteur proident amet ullamco voluptate duis consequat ea aliqua culpa. Labore occaecat sint laborum exercitation quis non aliqua.</p>
            </div>
        </div>
    );
}
