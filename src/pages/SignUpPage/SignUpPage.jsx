import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"

import {
  Container,
  Input,
  Button,
  TextoContainer,
  Titulo,
} from "../SignUpPage/SignUpPageStyled"
import Header from "../../components/Header"
import { authService } from "../../services/authService"
import { goToFeedPage } from "../../routes/coordinator";

const SignupPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const signup = async () => {
    try {
      setIsLoading(true);

      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const data = await authService.signup(body);

      window.localStorage.setItem("lablink-token", data.token);

      goToFeedPage(navigate);
    } catch (error) {
      console.error("Erro no signup:", error);
      alert(error?.response?.data?.message || "Erro ao criar conta.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header />

      <Titulo>Welcome to LabLink</Titulo>

      <Input
        value={form.name}
        onChange={onChangeForm}
        name="name"
        placeholder="Nickname"
        autoComplete="off"
      />

      <Input
        value={form.email}
        name="email"
        onChange={onChangeForm}
        placeholder="E-mail"
        autoComplete="off"
      />

      <Input
        name="password"
        value={form.password}
        onChange={onChangeForm}
        type="password"
        placeholder="Password"
        autoComplete="off"
      />

      <TextoContainer>
        <p>
          By continuing, you are agreeing to our
          <span> User Agreement </span>
          and our
          <span> Privacy Policy</span>.
        </p>

        <p>
          <input type="checkbox" /> I agree to receive emails about cool stuff
          from LabLink.
        </p>
      </TextoContainer>

      <Button onClick={signup} type="button">
        {isLoading ? <CircularProgress color="inherit" size={30} /> : "Sign Up"}
      </Button>
    </Container>
  );
};

export default SignupPage;