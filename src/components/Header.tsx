import Image from "next/image";
import React, { useContext } from "react";
import { MouseEventHandler } from "react";
import styled, { ThemeContext as StyledThemeContext } from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
const Header = () => {
  const themeContext = useContext(StyledThemeContext);
  const { themeToggler, theme } = useContext(ThemeContext);
  console.log("Current theme: ", themeContext);

  return (
    <S.HeaderContainer>
      <div className="logo-wrapper">
        <Image src="/assets/logo-invoice.svg" width={30} height={30} alt="" />
      </div>
      <div className="dark-mode-toggle-wrapper">
        <button
          type="button"
          onClick={themeToggler as MouseEventHandler<HTMLButtonElement>}
        >
          {theme === "light" ? (
            <Image
              src="/assets/icon-moon.svg"
              alt="dark mode buttion"
              aria-label="toggle dark mode"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/icon-sun.svg"
              alt="dark mode buttion"
              aria-label="toggle dark mode"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
      <div className="header-divider" />
      <div className="avatar-wrapper">
        <button>
          <Image
            width={40}
            height={40}
            src="/assets/avatar.jpg"
            alt="avatar"
            aria-label="avatar"
          />
        </button>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
const S = {
  HeaderContainer: styled.header`
    position: sticky;
    top: 0px;
    z-index: 20;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(55, 59, 83);
    transition: background-color 0.3s ease 0s;
    button {
      all: unset;
      cursor: pointer;
    }
    .logo-wrapper {
      margin-right: auto;
      position: relative;
      width: 5rem;
      height: 5rem;
      display: grid;
      place-items: center;
      background: rgb(124, 93, 250);
      border-radius: 0px 20px 20px 0px;
      img {
        z-index: 1;
      }
      ::after {
        z-index: 0;
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50%;
        background: rgb(146, 119, 255);
        border-radius: 20px 0px;
      }
    }
    .dark-mode-toggle-wrapper {
      position: relative;
      margin: 0px 1.75rem;
      button {
        all: unset;
        cursor: pointer;
      }
    }
    .avatar-wrapper {
      position: relative;
      margin: 0px 2rem;
      img {
        width: 2rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .header-divider {
      width: 1px;
      align-self: stretch;
      background: rgb(73, 78, 110);
    }
  `,
};
