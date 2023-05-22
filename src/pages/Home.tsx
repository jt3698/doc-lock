import UserDetails from '../components/UserDetails';
import SignedIn from './SignedIn';

export const HomePage = () => {
    const env = process.env.NODE_ENV;

    return (
        <div>
            <p>Environment: {env}</p>
            
            <SignedIn />

            <div>
            <h3>Log Users at Console</h3>
            <UserDetails></UserDetails>
            </div>
        </div>
    )
}