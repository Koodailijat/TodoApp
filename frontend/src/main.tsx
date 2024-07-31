import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_config.scss';
import './styles/defaults.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Root from './routes/root/Root.tsx';

import Login from '@/routes/login/Login.tsx';
import ErrorPage from '@/routes/error-page/ErrorPage.tsx';
import LoginEmail from '@/routes/login/loginemail/LoginEmail.tsx';
import SignUp from '@/routes/register/SignUp.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Login />,
                    },
                    {
                        path: 'email',
                        element: <LoginEmail />,
                    },
                ],
            },
            {
                path: '/signup',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <SignUp />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
