import ReactDOM from 'react-dom/client';
import './styles/_config.css';
import './styles/defaults.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Root } from './routes/root/Root.tsx';
import './i18n.ts';
import { Login } from '@/routes/login/Login.tsx';
import { ErrorPage } from '@/routes/error-page/ErrorPage.tsx';
import { LoginUsername } from '@/routes/login/loginusername/LoginUsername.tsx';
import { SignUp } from '@/routes/signup/SignUp.tsx';
import { Dashboard } from '@/routes/dashboard/Dashboard.tsx';
import { queryClient } from '@/queries/queryClient.ts';
import { Toaster } from '@/components/ui/toaster.tsx';

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
            {
                path: '/dashboard',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
    </QueryClientProvider>
);
