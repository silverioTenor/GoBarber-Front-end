import React from 'react';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/Auth';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
