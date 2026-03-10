import styled from "styled-components"

export const ContainerHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid #ececec;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  height: 72px;
  margin: 0 auto;
  padding: 0 18px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    height: 64px;
    padding: 0 14px;
  }
`

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  min-width: 0;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const LogoImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }
`

export const LogoText = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;

  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  color: #ff4f7b;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 999px;
  transition: 0.2s ease;
  white-space: nowrap;
  z-index: 1;

  &:hover {
    background: #fff1f5;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`