import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <div className="logo">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="button-container">
          <button className="blue-button">
            <span>icon</span>login
          </button>
          <button className="green-button">daftar</button>
        </div>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
const S = {
  HeaderContainer: styled.header`
    overflow-x: hidden;
    .button-container {
      display: flex;
    }
    .logo {
      display: grid;
      place-items: center;
      width: 200px;
      height: 100px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .blue-button,
    .green-button {
      all: unset;
      margin-left: 10px;
      text-transform: uppercase;
      color: white;
      font-weight: 700;
      max-width: 191px;
      border-radius: 6px;
      height: 40px;
      padding: 0 8px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .blue-button {
      background-color: #038fe4;
    }
    .green-button {
      background-color: #31894d;
    }
  `,
  NavigationLinks: styled.nav`
    background-color: #eccb5a;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    height: 85px;
    .container {
      display: flex;
      align-items: center;
    }
    .ul-container {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      li {
        padding: 0 16px;
        color: #362d28;
        font-weight: 700;
      }
      li:first-child {
        padding: 0;
      }
    }
  `,
};
