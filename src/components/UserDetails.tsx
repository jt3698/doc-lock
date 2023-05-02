import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../models';

async function logUserDetails(props: any) {
    const models = await DataStore.query(Users);
    console.log(models);
    console.log(props.email);
}

function UserDetails(email: any) {
    return <button onClick={() => logUserDetails(email)}>Log Users</button>
}

export default UserDetails;