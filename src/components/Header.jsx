import React from "react";
import mini from "../assets/mini.png";
import { goToLoginPage, goToFeedPage } from "../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContainerHeader,
  HeaderContent,
  LogoArea,
  LogoImage,
  LogoText,
  LogoutButton,
} from "./HeaderStyled";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("lablink-token");
    goToLoginPage(navigate);
  };

  const isSignupPage = location.pathname === "/signup";
  const isFeedPage = location.pathname === "/feed";

  return (
    <ContainerHeader>
      <HeaderContent>
        <LogoArea
          onClick={() => {
            if (!isFeedPage) {
              goToFeedPage(navigate);
            }
          }}
        >
          <LogoImage src={mini} alt="LabLink logo" />
          <LogoText>LabLink</LogoText>
        </LogoArea>

        {isSignupPage ? (
          <LogoutButton onClick={() => goToLoginPage(navigate)}>
            ← Login
          </LogoutButton>
        ) : (
          <LogoutButton onClick={logout}>
            Logout
          </LogoutButton>
        )}
      </HeaderContent>
    </ContainerHeader>
  );
};

export default Header;