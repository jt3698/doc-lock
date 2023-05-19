import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import './mvp.css'
import { HomePage } from './pages/Home';
import UploadPage from './pages/Upload';
import ApprovePage from './pages/Approve';
import { Header } from './components/Header';
import { useState } from 'react';
import { GetRole } from './queries/users';

function App() {
  const [userRole, setUserRole] = useState("null");
  
  return (
    <div className="App"> 
      <Header></Header>  
      <Authenticator>
          {({ signOut, user }) => {
              GetRole(user?.attributes?.sub).then((role) => setUserRole(role));
              
              return (
                <Routes>
                  <Route
                    path="/approve"
                    element={<ApprovePage user={user} role={userRole}/>} />
                  <Route
                    path="/upload"
                    element={<UploadPage />} />
                  <Route
                    path="/"
                    element={<HomePage user={user} signOut={signOut} role={userRole}/>} />
                </Routes>
              );
          }}
      </Authenticator>  
    </div>
  );
}

export default App;
