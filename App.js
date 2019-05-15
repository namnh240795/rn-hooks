import React from 'react';
import Routes from 'src/routes';
import { AuthProvider } from 'src/contexts/AuthContext';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
