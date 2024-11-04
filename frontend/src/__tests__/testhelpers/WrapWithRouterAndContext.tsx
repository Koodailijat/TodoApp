import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NavBarContext, UserContext } from '@/routes/root/Root';
import './i18nextMock.ts';

interface WrapWithRouterAndContextProps {
    children: any;
    isOpen: boolean;
    loggedIn: boolean;
}

export default function WrapWithRouterAndContext({
    children,
    isOpen,
    loggedIn,
}: WrapWithRouterAndContextProps) {
    return render(
        <BrowserRouter>
            <UserContext.Provider
                value={{
                    loggedIn: loggedIn,
                    setLoggedIn: (loggedIn) => !loggedIn,
                }}>
                <NavBarContext.Provider
                    value={{
                        isOpen: isOpen,
                        setIsOpen: (isOpen) => !isOpen,
                    }}>
                    {children}
                </NavBarContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
