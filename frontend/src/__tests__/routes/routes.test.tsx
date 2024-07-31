import { describe, it } from 'vitest';
import { getByRole, getByText, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Root from '@/routes/root/Root.tsx';
import ErrorPage from '@/routes/error-page/ErrorPage.tsx';
import Login from '@/routes/login/Login.tsx';
import LoginEmail from '@/routes/login/loginemail/LoginEmail.tsx';

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
        const { container } = render(<RouterProvider router={router} />);

        expect(getByRole(container, 'heading').textContent).toBe('Oops!');
    });
});

describe('Login', () => {
    it('Should render login when navigated to /', () => {
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
        const { container } = render(<RouterProvider router={router} />);

        expect(getByText(container, 'Login')).toBeDefined();
    });
});

describe('LoginEmail', () => {
    it('Should render login when navigated to /', () => {
        const routes = [
            {
                path: '/login/email',
                element: <LoginEmail />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/login/email'],
            initialIndex: 1,
        });
        const { container } = render(<RouterProvider router={router} />);

        expect(getByText(container, 'Login with email')).toBeDefined();
    });
});
