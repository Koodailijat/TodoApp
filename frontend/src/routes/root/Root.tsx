import { Outlet } from 'react-router-dom';
import { createContext, useMemo, useState } from 'react';
import SideNav from '@/components/navigation/SideNav.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { storageKeys } from '@/constants/storageKeys.ts';

export interface UserContextTypes {
    loggedIn: boolean;
    setLoggedIn: (args: boolean) => void;
}

export interface NavBarContextTypes {
    isOpen: boolean;
    setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const UserContext = createContext<UserContextTypes>({
    loggedIn: false,
    setLoggedIn: () => {},
});

export const NavBarContext = createContext<NavBarContextTypes>({
    isOpen: true,
    setIsOpen: () => {},
});
export default function Root() {
    const isLoggedIn = !!localStorage.getItem(storageKeys.accessToken);
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const [isOpen, setIsOpen] = useState(true);
    const userValue = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);
    const isOpenValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <UserContext.Provider value={userValue}>
                <NavBarContext.Provider value={isOpenValue}>
                    <SideNav />
                    <Outlet />
                </NavBarContext.Provider>
            </UserContext.Provider>
        </ThemeProvider>
    );
}
