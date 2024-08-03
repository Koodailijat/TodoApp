import ReactDOM from 'react-dom/client';
import './styles/_config.scss';
import './styles/defaults.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './routes/root/Root.tsx';

import Login from '@/routes/login/Login.tsx';
import ErrorPage from '@/routes/error-page/ErrorPage.tsx';
import LoginUsername from '@/routes/login/loginusername/LoginUsername.tsx';
import SignUp from '@/routes/signup/SignUp.tsx';

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
                        path: 'username',
                        element: <LoginUsername />,
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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
