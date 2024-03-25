import React from 'react';
import Router from './router';
import { useThemeContext } from "./theme/ThemeContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {

  const { theme } = useThemeContext();

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router/>
    </ThemeProvider>

  );
}

export default App;
