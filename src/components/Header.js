import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  height: 8vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1.5px;
  margin: 0;
  font-family: "Segoe UI", "Roboto", "Arial", sans-serif;
`;

const BankBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BankLogo = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2563eb 60%, #60a5fa 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(30, 64, 175, 0.13);
  font-size: 1.6rem;
  color: #fff;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: "Segoe UI", "Roboto", "Arial", sans-serif;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <BankBrand>
        <BankLogo>₣</BankLogo>
        <Title>FakeBank Chat</Title>
      </BankBrand>
    </HeaderContainer>
  );
};

export default Header;
