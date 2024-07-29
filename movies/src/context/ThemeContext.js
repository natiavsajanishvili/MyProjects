import React, { createContext, useState, useContext } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f8b319",
    },
    background: {
      default: "#ffffff",
    },
  },
  background: "#ffffff",
  color: "#000000",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f8b319",
    },
    background: {
      default: "#000000",
    },
  },
  background: "#000000",
  color: "#ffffff",
});

// Create context for theme
const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Determine which theme to use based on currentTheme state
  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {/* სხვადასხვა ბრაუზერში რომ ერთნაირად გამოიყურებოდეს */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProviderWrapper, useThemeContext };
