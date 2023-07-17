import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from './Login';

const UnauthenticatedApp: React.FC = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div>
      <h1>Welcome to our Starter React App!</h1>
      <p>Please log in to continue:</p>
      <Login onLogin={loginWithGoogle} />
    </div>
  );
};

export default UnauthenticatedApp;