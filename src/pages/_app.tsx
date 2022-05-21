import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GlobalStyles } from "../styles/globals";
import { lightTheme, darkTheme } from "../styles/theme";
import { useDarkMode } from "../hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import { MouseEventHandler } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  console.log({ theme }, "_app");
  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout>
          <button
            type="button"
            onClick={themeToggler as MouseEventHandler<HTMLButtonElement>}
          >
            usehook doesnt have a shared state?
          </button>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
