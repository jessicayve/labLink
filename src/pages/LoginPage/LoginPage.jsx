import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import {
  Container,
  Form,
  Input,
  BtnContinuar,
  Line,
  Button,
  LogoWrapper,
  Subtitle,
  ErrorMessage,
} from "./LoginPageStyled";

import logoLab from "../../assets/logoLab.png";
import { authService } from "../../services/authService";
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeForm = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!form.email.trim() || !form.password.trim()) {
      setErrorMessage("Preencha email e senha.");
      return false;
    }

    return true;
  };

  const login = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (!validateForm()) return;

    try {
      setIsLoading(true);

      await authService.login({
        email: form.email,
        password: form.password,
      });

      goToFeedPage(navigate);
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Não foi possível fazer login. Verifique suas credenciais.";

      setErrorMessage(apiMessage);
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <img src={logoLab} alt="Logo LabLink" />
        <Subtitle>A Cool Social Network</Subtitle>
      </LogoWrapper>

      <Form onSubmit={login}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChangeForm}
          disabled={isLoading}
          autoComplete="email"
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={onChangeForm}
          disabled={isLoading}
          autoComplete="current-password"
        />

        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}

        <BtnContinuar type="submit" disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Continuar"}
        </BtnContinuar>
      </Form>

      <Line />

      <Button
        type="button"
        onClick={() => goToSignupPage(navigate)}
        disabled={isLoading}
      >
        Criar conta
      </Button>
    </Container>
  );
};

export default LoginPage;