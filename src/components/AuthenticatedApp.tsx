import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Logout from './Logout';
import Counter from './Counter';

const AuthenticatedApp: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <Counter />
      <Logout />
    </div>
  );
};

export default AuthenticatedApp;