import { API } from "aws-amplify";
import { getUsers } from "../graphql/queries";
import { useState } from "react";

function SignedIn(props: { signOut: any; userAttributes: any}) {
  const signOut = props.signOut;
  const userAttributes = props.userAttributes;

  const email = userAttributes.email;
  const userID = userAttributes.sub;

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

  const [role, setRole] = useState("null");
  GetRole(userID).then((role) => setRole(role));

  return (
    <div>
        <h1>Welcome to my Website!</h1>
        <h3>You are authenticated</h3>
        
        <h3>Your email: {email}</h3>
        <h3>Your role: {role}</h3>

        <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default SignedIn;
