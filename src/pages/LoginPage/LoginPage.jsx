import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"

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
  Card
} from "./LoginPageStyled"

import logoLab from "../../assets/logoLab.png"
import { authService } from "../../services/authService"
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator"

const LoginPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const onChangeForm = (event) => {
    const { name, value } = event.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!form.email.trim() || !form.password.trim()) {
      setErrorMessage("Please fill in your email and password.")
      return false
    }

    return true
  }

  const login = async (event) => {
    event.preventDefault()
    setErrorMessage("")

    if (!validateForm()) return

    try {
      setIsLoading(true)

      await authService.login({
        email: form.email,
        password: form.password
      })

      goToFeedPage(navigate)
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Could not log in. Please check your credentials."

      setErrorMessage(apiMessage)
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Card>
        <LogoWrapper>
          <img src={logoLab} alt="LabLink logo" />
          
          <Subtitle>A cool social network for sharing ideas and connecting</Subtitle>
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
            placeholder="Password"
            value={form.password}
            onChange={onChangeForm}
            disabled={isLoading}
            autoComplete="current-password"
          />

          {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}

          <BtnContinuar type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Continue"}
          </BtnContinuar>
        </Form>

        <Line />

        <Button
          type="button"
          onClick={() => goToSignupPage(navigate)}
          disabled={isLoading}
        >
          Create account
        </Button>
      </Card>
    </Container>
  )
}

export default LoginPage