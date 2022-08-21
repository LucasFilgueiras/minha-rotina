import React from "react";
import Container from "../../shared/styles/Container";
import Form from "../shared/Form";
import Input from "../../../../shareds/Input";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";

export default function SignUpForm() {
  return (
    <Container>
      <Form>
        <label>
          Nome
          <Input placeholder="Digite seu nome" type="textfield"/>
        </label>
        <label>
          Email
          <Input placeholder="Digite sua email" type="textfield"/>
        </label>
        <label>
          Senha
          <Input placeholder="Digite sua senha" type="password"/>
        </label>
        <label>
          Data de aniversário
          <Input placeholder="Digite sua data de aniversário" type="date"/>
        </label>
        <PrimaryButton>Entrar</PrimaryButton>
      </Form>
    </Container>
  )
}