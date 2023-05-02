import './App.css';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from './models';

function App() {
  const env = process.env.NODE_ENV;

  const [email, setEmail] = useState("null");
  const [userID, setUserID] = useState("null");
  const [role, setRole] = useState("null");

  const GetRole = async (userID: any) => {
    const user = await DataStore.query(Users, userID);
    const role = user? ((user?.admin) ? "Admin" : "Member") : "NULL";
    
    return role;
  }

  const GetCurrentEmail = () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(async (user) => {
        setUserID(user.attributes.sub);
        setEmail(user.attributes.email);
        setRole(await GetRole(user.attributes.sub));
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
              <h3>Your role: {role}</h3>

              <button onClick={signOut}>Sign Out</button>
            </div>
        )}}
      </Authenticator>  

      <div>
      <UserDetails userID={userID}></UserDetails>
      </div>
    </div>
  );
}

export default App;
