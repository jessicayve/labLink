import React from "react";
import { goToLoginPage, goToFeedPage } from "../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContainerHeader,
  HeaderContent,
  LogoArea,
  LogoImage,
  LogoText,
  LogoutButton,
} from "./HeaderStyled"


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("lablink-token");
    goToLoginPage(navigate);
  };

  const isSignupPage = location.pathname === "/signup";
  const isFeedPage = location.pathname === "/feed";
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

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
          
          <LogoText>LabLink</LogoText>
        </LogoArea>

        {isSignupPage ? (
          <LogoutButton onClick={() => goToLoginPage(navigate)}>
            ← Login
          </LogoutButton>
        ) : isLoginPage ? (
          <LogoutButton onClick={() => navigate("/signup")}>
            Sign up
          </LogoutButton>
        ) : (
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        )}
      </HeaderContent>
    </ContainerHeader>
  );
};

export default Header;