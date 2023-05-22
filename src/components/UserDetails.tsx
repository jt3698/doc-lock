import { GetUsers } from "../queries/users";

function logUserDetails() {
    // List all items
    GetUsers().then((allUsers) => {
        console.log(allUsers);
    })
}

function UserDetails() {
    return <button onClick={logUserDetails}>Log Users</button>
}

export default UserDetails;