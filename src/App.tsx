import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import './mvp.css'
import { HomePage } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App"> 
      <Header></Header>  
      <Authenticator>
          {({ signOut, user }) => {
              return (
                <Routes>
                  <Route
                    path="/page1"
                    element={<Page1 />} />
                  <Route
                    path="/page2"
                    element={<Page2 />} />
                  <Route
                    path="/"
                    element={<HomePage user={user} signOut={signOut} />} />
                </Routes>
              );
          }}
      </Authenticator>  
    </div>
  );
}

export default App;
