import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_config.scss';
import './styles/defaults.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root.tsx';
import ErrorPage from './routes/error-page/error-page.tsx';
import Login from '@/routes/login/Login.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
