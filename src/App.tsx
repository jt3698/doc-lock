import './App.css';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { useState } from 'react';

function App() {
  const env = process.env.NODE_ENV;

  const [email, setEmail] = useState("null");

  const GetCurrentEmail = () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        setEmail(user.attributes.email)
        console.log(user.attributes.email)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1>DocLock</h1>
      <p>Environment: {env}</p>
      <Authenticator>
        {({ signOut }) => {
          GetCurrentEmail();
          return (
            <div>
              <h1>Welcome to my Website!</h1>
              <h3>You are authenticated</h3>
              
              <h3>Your email: {email}</h3>

              <button onClick={signOut}>Sign Out</button>
            </div>
        )}}
      </Authenticator>  
    </div>
  );
}

export default App;
