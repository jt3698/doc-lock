import { API } from "aws-amplify";
import { listUsers } from "../graphql/queries";

async function logUserDetails() {
    // List all items
    const allUsers = await API.graphql({
        query: listUsers
    });
    console.log(allUsers);
}

function UserDetails() {
    return <button onClick={logUserDetails}>Log Users</button>
}

export default UserDetails;