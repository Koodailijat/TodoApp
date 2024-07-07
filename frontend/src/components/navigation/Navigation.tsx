import { Link } from 'react-router-dom';
import { Home, ListTodo, LogIn, Menu, UserRoundPlus } from 'lucide-react';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { UserContext } from '@/routes/root/root.tsx';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(true);
    const isOpenStyling = isOpen ? 'w-64 p-2' : 'w-18 p-2';
    const { loggedIn } = useContext(UserContext);

    return (
        <div
            className={`absolute left-0 top-0 z-50 flex h-full flex-col items-center gap-6 bg-secondary text-primary ${isOpenStyling}`}
        >
            <div className="flex w-full justify-end">
                <Button
                    className="bg-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu />
                </Button>
            </div>
            <div className="flex items-center justify-center">
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 text-3xl"
                >
                    {isOpen ? (
                        <>
                            <ListTodo /> <h1>Todo App</h1>
                        </>
                    ) : (
                        ''
                    )}
                </Link>
            </div>
            <div className="flex flex-col gap-6 text-center">
                <div className="flex items-center justify-center gap-2">
                    <Link
                        className="flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/"
                    >
                        <Home />
                        {isOpen ? 'Home' : ''}
                    </Link>
                </div>
                {!loggedIn && (
                    <>
                        <div>
                            <Link
                                className="flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                                to="/login"
                            >
                                <LogIn />
                                {isOpen ? 'Login' : ''}
                            </Link>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Link
                                className="flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                                to="/"
                            >
                                <UserRoundPlus />
                                {isOpen ? 'Register' : ''}
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
