import { Outlet } from 'react-router-dom';
import { createContext, useMemo, useState } from 'react';
import Navigation from '@/components/navigation/Navigation.tsx';

interface ContextTypes {
    loggedIn: boolean;
    setLoggedIn: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const UserContext = createContext<ContextTypes>({
    loggedIn: false,
    setLoggedIn: null,
});
export default function Root() {
    const [loggedIn, setLoggedIn] = useState(false);

    const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);

    return (
        <UserContext.Provider value={value}>
            <div className="flex h-screen w-screen flex-row">
                <Navigation />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}
