import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
  margin-top: 20px;
  width: 358px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 33px;
  text-align: center;

  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const Input = styled.input`
  width: 360px;
  height: 50px;
  margin-bottom: 10px;

  border: 1px solid #D5D8DE;
  border-radius: 4px;

  padding: 10px;
  box-sizing: border-box;
`;

export const TextoContainer = styled.div`
  color: #000000;
  margin-top: 20px;
  width: 364px;

  font-size: 12px;
  letter-spacing: 1px;
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  line-height: 1.4;

  span {
    color: blue;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 360px;
  height: 50px;

  border-radius: 27px;
  border: none;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);

  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;

  cursor: pointer;
`;