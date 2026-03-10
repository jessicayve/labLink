import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"

import {
  Container,
  FormCard,
  Input,
  Button,
  TextoContainer,
  Titulo,
  Subtitle,
  CheckboxRow
} from "../SignUpPage/SignUpPageStyled"
import Header from "../../components/Header"
import { authService } from "../../services/authService"
import { goToFeedPage } from "../../routes/coordinator"

const SignupPage = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeForm = (event) => {
    const { name, value } = event.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const signup = async () => {
    try {
      setIsLoading(true)

      const body = {
        name: form.name,
        email: form.email,
        password: form.password
      }

      const data = await authService.signup(body)

      window.localStorage.setItem("lablink-token", data.token)

      goToFeedPage(navigate)
    } catch (error) {
      console.error("Signup error:", error)
      alert(error?.response?.data?.message || "Could not create your account.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header />

      <FormCard>
        <Titulo>Welcome to LabLink</Titulo>
        <Subtitle>Create your account and start sharing with the community</Subtitle>

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
          placeholder="Email"
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
            By continuing, you agree to our
            <span> User Agreement </span>
            and
            <span> Privacy Policy</span>.
          </p>

          <CheckboxRow>
            <input type="checkbox" />
            <span>I agree to receive emails about updates from LabLink.</span>
          </CheckboxRow>
        </TextoContainer>

        <Button onClick={signup} type="button" disabled={isLoading}>
          {isLoading ? <CircularProgress color="inherit" size={28} /> : "Sign Up"}
        </Button>
      </FormCard>
    </Container>
  )
}

export default SignupPage