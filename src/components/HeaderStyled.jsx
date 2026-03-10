import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid #ececec;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  height: 72px;
  margin: 0 auto;
  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;

export const LogoText = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #1565c0;
`;

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

  &:hover {
    background: #fff1f5;
  }
`;