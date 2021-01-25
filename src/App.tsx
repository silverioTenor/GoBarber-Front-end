import React from 'react';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
