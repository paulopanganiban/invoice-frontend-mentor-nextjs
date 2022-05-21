import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  console.log({ theme }, "Layout");
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
