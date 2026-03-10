import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #fff8f3 0%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 40px;
`

export const FormCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  margin-top: 28px;
  padding: 28px 24px;
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    margin-top: 18px;
    padding: 22px 18px;
    border-radius: 18px;
  }
`

export const Titulo = styled.h1`
  margin: 0 0 10px;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.2;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

export const Subtitle = styled.p`
  margin: 0 0 24px;
  text-align: center;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
  border: 1px solid #d5d8de;
  border-radius: 10px;
  padding: 0 14px;
  box-sizing: border-box;
  font-size: 15px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #fe7e02;
    box-shadow: 0 0 0 3px rgba(254, 126, 2, 0.12);
  }
`

export const TextoContainer = styled.div`
  color: #444;
  margin-top: 14px;
  width: 100%;
  font-size: 12px;
  font-family: "Noto Sans", sans-serif;
  text-align: left;
  line-height: 1.6;

  span {
    color: #1565c0;
    cursor: pointer;
    font-weight: 600;
  }

  p {
    margin: 0 0 12px;
  }
`

export const CheckboxRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;

  input {
    margin-top: 2px;
  }

  span {
    color: #555;
    font-weight: 400;
    cursor: pointer;
  }
`

export const Button = styled.button`
  margin-top: 22px;
  width: 100%;
  height: 50px;
  border-radius: 27px;
  border: none;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    opacity: 0.96;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
