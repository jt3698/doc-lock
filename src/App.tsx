import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import UserDetails from './components/UserDetails';
import SignedIn from './pages/SignedIn';

function App() {
  const env = process.env.NODE_ENV;

  return (
    <div className="App">
      <h1>DocLock</h1>
      <p>Environment: {env}</p>
      <Authenticator>
        {({ signOut, user }) => {
          return (
            <SignedIn 
            signOut={signOut}
            userAttributes={user?.attributes}
            ></SignedIn>
          );
        }}
      </Authenticator>  

      <div>
        <h3>Log Users at Console</h3>
        <UserDetails></UserDetails>
      </div>
    </div>
  );
}

export default App;
