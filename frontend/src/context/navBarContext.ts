import { createContext } from 'react';

export interface NavBarContextTypes {
    isOpen: boolean;
    setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const NavBarContext = createContext<NavBarContextTypes>({
    isOpen: true,
    setIsOpen: () => {},
});
