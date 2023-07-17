import React from 'react';
import { useAuth } from './hooks/useAuth';
import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;