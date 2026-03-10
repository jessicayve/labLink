import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  background: linear-gradient(180deg, #fff8f3 0%, #ffffff 100%);

  @media (max-width: 480px) {
    padding: 20px 12px;
    align-items: flex-start;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 420px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  text-align: center;

  img {
    width: 160px;
    max-width: 100%;
    display: block;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;

    img {
      width: 130px;
    }
  }
`

export const Subtitle = styled.p`
  color: #fe7e02;
  font-weight: 600;
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  max-width: 320px;

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 280px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 28px 24px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 22px 18px;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    border-radius: 16px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  border: 1px solid #d5d8de;
  border-radius: 10px;
  padding: 0 14px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: 0.2s;

  &:focus {
    border-color: #fe7e02;
    box-shadow: 0 0 0 3px rgba(254, 126, 2, 0.12);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    height: 48px;
    font-size: 15px;
    margin-bottom: 14px;
  }
`

export const ErrorMessage = styled.p`
  width: 100%;
  margin: -4px 0 12px;
  color: #d32f2f;
  font-size: 14px;
  text-align: left;
`

export const BtnContinuar = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 27px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin-top: 8px;
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

  @media (max-width: 480px) {
    height: 48px;
    font-size: 16px;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  max-width: 360px;
  margin: 16px auto 20px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 14px auto 18px;
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: 360px;
  height: 50px;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #fe7e02;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    background-color: #fff7f0;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 48px;
    font-size: 16px;
  }
`