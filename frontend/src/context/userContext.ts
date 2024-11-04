import { createContext } from 'react';

export interface UserContextTypes {
    loggedIn: boolean;
    setLoggedIn: (args: boolean) => void;
}

export const UserContext = createContext<UserContextTypes>({
    loggedIn: false,
    setLoggedIn: () => {},
});
