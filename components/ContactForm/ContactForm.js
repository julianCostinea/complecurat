import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import classes from "./ContactForm.module.css";
import Loader from "../UI/Loader/Loader";

const ContactForm = (props) => {
  const nameRef = useRef();
  const telephoneRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    nameRef.current.errorMessage = "Numele nu poate fi mai scurt de 3 litere";
    emailRef.current.errorMessage = "Adresa de mail trebuie sa fie valida";
    descriptionRef.current.errorMessage =
      "Mesajul tau trebuie sa fie mai lung de 10 litere";
  }, []);

  const [errorHeader, setErrorHeader] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const validateInputs = (...inputs) => {
    setErrorHeader("");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.border = "1px solid #ccc";
      if (inputs[i].id === "email") {
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[i].value)
        ) {
          inputs[i].style.border = "1px solid red";
          setErrorHeader(inputs[i].errorMessage);
          setIsLoading(false);
          return;
        }
      }
      if (inputs[i].id === "description") {
        if (inputs[i].value.length < 10) {
          inputs[i].style.border = "1px solid red";
          setErrorHeader(inputs[i].errorMessage);
          setIsLoading(false);
          return;
        }
      }
      if (inputs[i].value.length < 3) {
        inputs[i].style.border = "1px solid red";
        setErrorHeader(inputs[i].errorMessage);
        setIsLoading(false);
        return;
      }
    }
    return true;
  };

  const userRecommendationFormHandler =  (event) => {
    event.preventDefault();
    setIsLoading(true);

    const name = nameRef.current.value.trim();
    const telephone = telephoneRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const templateParams = {
      name,
      telephone,
      email,
      description
    };

    const validForm = validateInputs(nameRef.current, emailRef.current, descriptionRef.current);

    if (validForm) {
      emailjs
        .send(
          "service_j9zx7nl",
          "template_vvlalpg",
          templateParams,
          "97iBAgNYtpWNFBuZj"
        )
        .then(
          (response) => {
            if (response.status == '200') {
              setIsCompleted(true);
            }
          },
        ).catch((err) => {
          setErrorHeader("Ceva neasteptat sa intamplat. Te rugam sa ne contactezi la office@completcurat.ro")
          setIsLoading(false);
        });
    }

  };

  return (
    <div className={classes.formContainer}>
      <h2>Nu ai gasit ce cautai? Nu ezita sa ne scrii!</h2>
      <form method="POST" onSubmit={userRecommendationFormHandler}>
        <h3 className={classes.errorHeader}>{errorHeader}</h3>
        <div className={classes.Input}>
          <label htmlFor="name"> Nume</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            autoComplete="name"
            className={classes.InputElement}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="telephone"> Telefon</label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            ref={telephoneRef}
            autoComplete="tel"
            className={classes.InputElement}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="email"> Adresa De Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            className={classes.InputElement}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="description">Mesajul Tau</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            ref={descriptionRef}
            className={classes.InputElement}
          ></textarea>
        </div>
        <button type="submit" className={classes.Button} disabled={isCompleted ? true : false}>
          Trimite &nbsp;
          <div
            className={classes.checkmarkDiv}
            style={{
              visibility: isLoading ? "visible" : "hidden",
            }}
          >
            <Loader hideCheckmark={isCompleted} />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
