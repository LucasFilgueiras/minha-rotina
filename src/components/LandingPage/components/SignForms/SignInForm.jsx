import React from "react";
import Container from "../../shared/styles/Container";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";
import Form from "../shared/Form";
import Input from "../../../../shareds/Input";

export default function SignInForm() {
  
  return (
    <Container>
      <Form>
        <label>
          Email
          <Input placeholder="Digite seu email" type="textfield"/>
        </label>
        <label>
          Senha
          <Input placeholder="Digite sua senha" type="textfield"/>
        </label>
        <PrimaryButton>Entrar</PrimaryButton>
      </Form>
    </Container>
  )
};