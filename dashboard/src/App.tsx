import React from 'react';
import Router from './router';
import { useThemeContext } from "./theme/ThemeContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { theme } = useThemeContext();

  return (
    
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <CssBaseline />
      <Router/>
    </ThemeProvider>

  );
}

export default App;
