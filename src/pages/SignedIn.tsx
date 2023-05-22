import { useAuthenticator } from "@aws-amplify/ui-react";
import { useCurrentAuth } from "../contexts/AuthContext";

function SignedIn() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);

  const { userAttributes, userRole } = useCurrentAuth();
  const email = userAttributes?.email;

  return (
    <div>
        <h1>Welcome to my Website!</h1>
        <h3>You are authenticated</h3>
        
        <h3>Your email: {email}</h3>
        <h3>Your role: {userRole}</h3>

        <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default SignedIn;
