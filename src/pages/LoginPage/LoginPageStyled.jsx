import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  background: linear-gradient(180deg, #fff8f3 0%, #ffffff 100%);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
  text-align: center;

  img {
    width: 160px;
    max-width: 100%;
    display: block;
  }
`;

export const Subtitle = styled.p`
  font-family: "Rubik", sans-serif;
  color: #fe7e02;
  font-weight: 600;
  margin: 0;
  font-size: 15px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 28px 24px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

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
`;

export const ErrorMessage = styled.p`
  width: 100%;
  margin: -4px 0 12px;
  color: #d32f2f;
  font-size: 14px;
  text-align: left;
`;

export const BtnContinuar = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 27px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  font-family: "Noto Sans", sans-serif;
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
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  max-width: 360px;
  margin: 20px auto;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;

export const Button = styled.button`
  width: 100%;
  max-width: 360px;
  height: 50px;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #fe7e02;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover:not(:disabled) {
    background-color: #fff7f0;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;