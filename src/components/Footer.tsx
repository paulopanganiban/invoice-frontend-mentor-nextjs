import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <S.FooterContainer>
      <div className="container">
        <img src="./assets/img-sprite.png" alt="" />
        
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
const S = {
  FooterContainer: styled.footer`
    .container {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    hr {
      margin: 2rem;
      width: 100vw;
      border-top: 1px dashed gray;
    }
  `,
};
