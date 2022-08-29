import React, {useState} from "react";
import Container from "../../shared/styles/Container";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";
import Form from "../shared/Form";
import Input from "../../../../shareds/Input";
import UsersRepository from "../../../../repositories/UsersRepository";

export default function SignInForm() {

  const [userParams, setUserParams] = useState({email: null, password: null});
  
  const usersRepository = new UsersRepository();

  const handleUserParamsChange = (e) => {
    setUserParams({...userParams,
      [e.target.name] : e.target.value
    })
    console.log(userParams);
  }

    const handleSignInButtonClick = async (e) => {
    e.preventDefault();
    const response = await usersRepository.signIn({email: userParams.email, password: userParams.password});
    const user = {...response.headers, ...response.data}
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <Container>
      <Form>
        <label>
          Email
          <Input name="email" placeholder="Digite seu email" type="textfield" onChange={handleUserParamsChange}/>
        </label>
        <label>
          Senha
          <Input name="password" placeholder="Digite sua senha" type="password" onChange={handleUserParamsChange}/>
        </label>
        <PrimaryButton onClick={handleSignInButtonClick}>Entrar</PrimaryButton>
      </Form>
    </Container>
  )
};