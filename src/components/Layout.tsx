import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <Header />
      {children}
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
const S = {
  LayoutContainer: styled.div``,
};
