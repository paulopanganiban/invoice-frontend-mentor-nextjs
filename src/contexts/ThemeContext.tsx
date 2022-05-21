import {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";
import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeContextProps {
  theme: string;
  themeToggler: string | boolean | (() => void);
  themeMode: {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
  };
  mountedComponent: boolean;
}
export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const themeToggler = useCallback(() => {
    theme === "light" ? setMode("dark") : setMode("light");
  }, [theme]);
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    setMountedComponent(true);
  }, []);
  const value = useMemo(
    () => ({
      theme,
      themeToggler,
      themeMode,
      mountedComponent,
    }),
    [mountedComponent, theme, themeMode, themeToggler]
  );
  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};
