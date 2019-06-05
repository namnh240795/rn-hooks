import React from 'react';
import Routes from 'src/routes';
import { AuthProvider } from 'src/contexts/AuthContext';

class App extends React.PureComponent {
  render() {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
} 

export default App;
