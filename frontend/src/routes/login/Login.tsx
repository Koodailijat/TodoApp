import { Button } from '@/components/ui/button.tsx';
import { useContext } from 'react';
import { UserContext } from '@/routes/root/root.tsx';

export default function Login() {
    const { loggedIn, setLoggedIn } = useContext(UserContext);
    return (
        <div className="m-72">
            <Button onClick={() => setLoggedIn(!loggedIn)}>Login</Button>
        </div>
    );
}
