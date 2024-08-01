import { beforeEach, describe, it, vi } from 'vitest';
import { getByRole, getByText, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Root from '@/routes/root/Root.tsx';
import ErrorPage from '@/routes/error-page/ErrorPage.tsx';
import Login from '@/routes/login/Login.tsx';
import LoginUsername from '@/routes/login/loginusername/LoginUsername.tsx';
import routeData from 'react-router';
import SignUp from '@/routes/signup/SignUp.tsx';

describe('Root', () => {
    it('Should render root when navigated to /', () => {
        const routes = [
            {
                path: '/',
                element: <Root />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
            initialIndex: 1,
        });
        const { container } = render(<RouterProvider router={router} />);

        expect(getByText(container, 'Todo App')).toBeDefined();
    });
});

describe('ErrorPage', () => {
    it('Should render error-page when url not found', () => {
        const routes = [
            {
                errorElement: <ErrorPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/thisurlnotfound'],
            initialIndex: 1,
        });
        render(<RouterProvider router={router} />);

        expect(screen.getByRole('heading').textContent).toBe('Oops!');
    });
});

describe('Login', () => {
    it('Should render login when navigated to /login', () => {
        const routes = [
            {
                path: '/login',
                element: <Login />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/login'],
            initialIndex: 1,
        });
        render(<RouterProvider router={router} />);

        expect(screen.getByRole('heading', { name: 'Login' })).toBeDefined();
    });
});

describe('LoginEmail', () => {
    const useLocation = vi.spyOn(routeData, 'useLocation');
    beforeEach(() => {
        useLocation.mockReturnValue({
            hash: '',
            key: '',
            pathname: '',
            search: '',
            state: { values: { email: 'test@test.com' } },
        });
    });
    it('Should render email login when navigated to /login/email', () => {
        const routes = [
            {
                path: '/login/email',
                element: <LoginUsername />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/login/email'],
            initialIndex: 1,
        });
        render(<RouterProvider router={router} />);

        expect(
            screen.getByRole('heading', { name: 'Login with email' })
        ).toBeDefined();
    });
});

describe('Signup', () => {
    it('Should render signup when navigated to /signup', () => {
        const routes = [
            {
                path: '/signup',
                element: <SignUp />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/signup'],
            initialIndex: 1,
        });
        const { container } = render(<RouterProvider router={router} />);

        expect(
            getByRole(container, 'heading', { name: 'Sign Up' })
        ).toBeDefined();
    });
});
