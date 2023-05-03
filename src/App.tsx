import './App.css';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import { API } from "aws-amplify";
import { getUsers } from "./graphql/queries";

function App() {
  const env = process.env.NODE_ENV;

  const [email, setEmail] = useState("null");
  const [userID, setUserID] = useState("null");
  const [role, setRole] = useState("null");

  const GetRole = async (userID: any) => {
    const user : any = await API.graphql({
      query: getUsers,
      variables: { id: userID }
    });
    const isAdmin = user?.data?.getUsers?.admin;

    let role = "X";
    if (isAdmin == null) {
      role = "NULL";
    } else {
      role = isAdmin ? "Admin" : "Member";
    }

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
