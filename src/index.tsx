import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);