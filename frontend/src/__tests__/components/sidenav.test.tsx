import {
    findByRole,
    getByLabelText,
    getByRole,
    getByText,
    queryAllByRole,
    queryAllByText,
    queryByRole,
    screen,
} from '@testing-library/react';
import SideNav from '@/components/navigation/SideNav.tsx';
import WrapWithRouterAndContext from '@/__tests__/testhelpers/WrapWithRouterAndContext.tsx';
import { userEvent } from '@testing-library/user-event';

describe('SideNav', () => {
    it('Should render right elements when user not logged in', () => {
        const loggedIn = false;
        const isOpen = true;

        WrapWithRouterAndContext({
            children: <SideNav />,
            isOpen,
            loggedIn,
        });
        expect(screen.getByRole('heading', { name: 'Todo App' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Home' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Login' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Register' })).toBeDefined();
    });

    it('Should render right elements when user is logged in', () => {
        const loggedIn = true;
        const isOpen = true;

        WrapWithRouterAndContext({
            children: <SideNav />,
            isOpen,
            loggedIn,
        });
        expect(screen.getByRole('heading', { name: 'Todo App' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Home' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Dashboard' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Profile' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Reminders' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'Logout' })).toBeDefined();
    });

    it('Should collapse navbar and display only ', async () => {
        const user = userEvent.setup();
        let loggedIn = false;
        let isOpen = false;

        const { container } = WrapWithRouterAndContext({
            children: <SideNav />,
            isOpen,
            loggedIn,
        });

        expect(
            queryAllByRole(container, 'heading', {
                name: 'Todo App',
            }).length
        ).toBe(0);
    });
});
