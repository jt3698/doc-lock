import { DataStore, syncExpression } from '@aws-amplify/datastore';
import { Users } from '../models';

async function logUserDetails(userID: any) {
    const user = await DataStore.query(Users, userID);
    console.log(user);
}

function UserDetails(props: {userID: any}) {
    return <button onClick={() => logUserDetails(props.userID)}>Log Users</button>
}

export default UserDetails;