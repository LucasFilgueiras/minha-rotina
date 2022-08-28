import React, {useState} from "react";
import Container from "../../shared/styles/Container";
import Form from "../shared/Form";
import Input from "../../../../shareds/Input";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";
import UsersRepository from "../../../../repositories/UsersRepository";

export default function SignUpForm() {

  const [userParams, setUserParams] = useState({});
  
  const usersRepository = new UsersRepository();

  const handleUserParamsChange = (e) => {
    setUserParams({...userParams,
      [e.target.name] : e.target.value
    })
    console.log(userParams);
  }

  const handleCreateAccountButtonClick = (e) => {
    e.preventDefault();
    usersRepository.create(userParams);
  }

  return (
    <Container>
      <Form>
        <label>
          Nome
          <Input name="name" placeholder="Digite seu nome" type="textfield" onChange={handleUserParamsChange}/>
        </label>
        <label>
          Email
          <Input name="email" placeholder="Digite sua email" type="textfield" onChange={handleUserParamsChange}/>
        </label>
        <label>
          Senha
          <Input name="password" placeholder="Digite sua senha" type="password" onChange={handleUserParamsChange}/>
        </label>
        <PrimaryButton onClick={handleCreateAccountButtonClick}>Entrar</PrimaryButton>
      </Form>
    </Container>
  )
}