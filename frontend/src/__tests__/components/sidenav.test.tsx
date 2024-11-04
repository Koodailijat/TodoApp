import { queryAllByRole, screen } from '@testing-library/react';
import SideNav from '@/components/navigation/SideNav.tsx';
import WrapWithRouterAndContext from '@/__tests__/testhelpers/WrapWithRouterAndContext.tsx';

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
        expect(screen.getByRole('link', { name: 'menu.home' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'menu.login' })).toBeDefined();
        expect(screen.getByRole('link', { name: 'menu.signup' })).toBeDefined();
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
        expect(screen.getByRole('link', { name: 'menu.home' })).toBeDefined();
        expect(
            screen.getByRole('link', { name: 'menu.dashboard' })
        ).toBeDefined();
        expect(
            screen.getByRole('link', { name: 'menu.profile' })
        ).toBeDefined();
        expect(
            screen.getByRole('link', { name: 'menu.reminders' })
        ).toBeDefined();
        expect(screen.getByRole('link', { name: 'menu.logout' })).toBeDefined();
    });

    it('Should collapse navbar and display only icons', async () => {
        const loggedIn = false;
        const isOpen = false;

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
