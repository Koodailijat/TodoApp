import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_config.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/root';
import ErrorPage from './routes/error-page/error-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
