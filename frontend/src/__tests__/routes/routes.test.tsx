import { describe, it } from 'vitest';
import { getByRole, getByText, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Root from '../../routes/root/root';
import ErrorPage from '../../routes/error-page/error-page';

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
