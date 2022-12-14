import React, {useState} from "react";
import Container from "../../shared/styles/Container";
import PrimaryButton from "../../../../shareds/Buttons/PrimaryButton";
import Form from "../shared/Form";
import Input from "../../../../shareds/Input";
import UsersRepository from "../../../../repositories/UsersRepository";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const usersRepository = new UsersRepository();

  const [userParams, setUserParams] = useState({email: null, password: null});
  const navigate = useNavigate();

  const handleUserParamsChange = (e) => {
    setUserParams({...userParams,
      [e.target.name] : e.target.value
    })
  }

    const handleSignInButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await usersRepository.signIn({email: userParams.email, password: userParams.password});
      const user = {...response.headers, ...response.data}
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/')
    } catch (error) {
      console.log(new Error (error.message));
    }

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