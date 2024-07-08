import { Outlet } from 'react-router-dom';
import { createContext, useMemo, useState } from 'react';
import Navigation from '@/components/navigation/Navigation.tsx';

interface UserContextTypes {
    loggedIn: boolean;
    setLoggedIn: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

interface NavBarContextTypes {
    isOpen: boolean;
    setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const UserContext = createContext<UserContextTypes>({
    loggedIn: false,
    setLoggedIn: null,
});
export const NavBarContext = createContext<NavBarContextTypes>({
    isOpen: true,
    setIsOpen: null,
});
export default function Root() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const userValue = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);
    const isOpenValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

    return (
        <UserContext.Provider value={userValue}>
            <NavBarContext.Provider value={isOpenValue}>
                <Navigation />
                <Outlet />
            </NavBarContext.Provider>
        </UserContext.Provider>
    );
}
