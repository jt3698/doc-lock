function SignedIn(props: { signOut: any; userAttributes: any; role: any}) {
  const signOut = props.signOut;
  const userAttributes = props.userAttributes;
  const role = props.role;

  const email = userAttributes.email;

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
