import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { AuthProvider } from './contexts/auth/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthProvider>
        <App /> 
      </AuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);