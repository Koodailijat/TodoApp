import { Outlet } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { SideNav } from '@/components/navigation/SideNav.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { storageKeys } from '@/constants/storageKeys.ts';
import { UserContext } from '@/context/userContext';
import { NavBarContext } from '@/context/navBarContext';

export function Root() {
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
