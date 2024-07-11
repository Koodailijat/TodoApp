import { useContext } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { UserContext } from '@/routes/root/root.tsx';
import PageView from '@/components/views/PageView.tsx';

export default function Login() {
    const { loggedIn, setLoggedIn } = useContext(UserContext);
    return (
        <PageView>
            <Button onClick={() => setLoggedIn(!loggedIn)}>Login</Button>
        </PageView>
    );
}
