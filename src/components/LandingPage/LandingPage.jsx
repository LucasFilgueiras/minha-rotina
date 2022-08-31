import React, { useState } from "react";
import personCelphone from "../../assets/person_celphone.svg";
import PrimaryButton from "../../shareds/Buttons/PrimaryButton";
import styles from "./LandingPage.module.css";
import SignInForm from "./components/SignForms/SignInForm";
import Container from "./shared/styles/Container";
import SignUpForm from "./components/SignForms/SignUpForms";

const LandingPage = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  return (
    <div className={styles.page}>
      <h1>Minha Rotina</h1>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <img src={personCelphone} alt="Mulher mexendo no celular" />
          <p>
            Organize suas rotinas de <br /> forma prática
          </p>
        </div>
        {!currentComponent ? (
          <Container>
            <h2>Já possui um conta?</h2>
            <PrimaryButton onClick={() => setCurrentComponent("sign in")}>
              Faça login
            </PrimaryButton>
            <div className={styles.blackLine}></div>
            <h2>Não possui uma conta?</h2>
            <PrimaryButton onClick={() => setCurrentComponent("sign up")}>
              Cadastre-se
            </PrimaryButton>
          </Container>
        ) : currentComponent === "sign in" ? (
          <SignInForm />
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
