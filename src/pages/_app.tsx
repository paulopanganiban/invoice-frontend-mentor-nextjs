import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeContextProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
