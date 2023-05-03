import { API } from "aws-amplify";
import { listUsers, getUsers } from "../graphql/queries";

async function logUserDetails(userID: any) {
    // List all items
    const allUsers = await API.graphql({
        query: listUsers
    });
    console.log(allUsers);

    // Get a specific item
    const user = await API.graphql({
        query: getUsers,
        variables: { id: userID }
    });
    
    console.log(user);
}

function UserDetails(props: {userID: any}) {
    return <button onClick={() => logUserDetails(props.userID)}>Log Users</button>
}

export default UserDetails;