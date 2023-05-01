import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'

function App() {
  const env = process.env.NODE_ENV;

  return (
    <div className="App">
      <h1>DocLock</h1>
      <p>Environment: {env}</p>
      <Authenticator>
        {({ signOut }) => (
            <div>
              <h1>Welcome to my Website!</h1>
              <h3>You are authenticated</h3>
              <button onClick={signOut}>Sign Out</button>
            </div>
        )}
      </Authenticator>  
    </div>
  );
}

export default App;
