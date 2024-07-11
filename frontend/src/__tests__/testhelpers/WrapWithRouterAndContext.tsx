import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { NavBarContext, UserContext } from '@/routes/root/root.tsx';
import SideNav from '@/components/navigation/SideNav.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';

type Theme = 'dark' | 'light' | 'system';
interface WrapWithRouterAndContextProps {
    children: any;
    isOpen: boolean;
    loggedIn: boolean;
    theme?: Theme;
}

export default function WrapWithRouterAndContext({
    children,
    isOpen,
    loggedIn,
    theme,
}: WrapWithRouterAndContextProps) {
    return render(
        <BrowserRouter>
            <ThemeProvider defaultTheme={theme}>
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
            </ThemeProvider>
        </BrowserRouter>
    );
}
