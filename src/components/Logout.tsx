import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Logout: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;