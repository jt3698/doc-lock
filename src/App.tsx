import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import './mvp.css'
import { HomePage } from './pages/Home';
import UploadPage from './pages/Upload';
import ApprovePage from './pages/Approve';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { GetRole } from './queries/users';
import { AuthContext, AuthContextType }  from './contexts/AuthContext';
import { FormProvider } from './contexts/FormContext';

function App() {
  const { user } = useAuthenticator((context) => [context.user]);
  
  const [currentUser, setCurrentUser] = useState<AuthContextType>({
    userAttributes: null,
    userRole: "null"
  });

  useEffect(() => {
    if (user) {
      GetRole(user?.attributes?.sub).then(
        (role) => setCurrentUser({
          userAttributes: user?.attributes,
          userRole: role
        })
      );
    } else {
      setCurrentUser({
        userAttributes: null,
        userRole: "null"
      });
    }
  }, [user])
  
  return (
    <div className="App"> 
      <Header></Header>  
      <Authenticator>
          {() => {
              return (
                <AuthContext.Provider value={currentUser}>
                <FormProvider>
                <Routes>
                  <Route
                    path="/approve"
                    element={<ApprovePage/>} />
                  <Route
                    path="/upload"
                    element={<UploadPage />} />
                  <Route
                    path="/"
                    element={<HomePage />} />
                </Routes>
                </FormProvider>
                </AuthContext.Provider>
              );
          }}
      </Authenticator>  
    </div>
  );
}

export default App;
