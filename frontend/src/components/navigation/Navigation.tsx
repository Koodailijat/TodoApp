import { Link } from 'react-router-dom';
import {
    ArrowLeftToLine,
    ArrowRightToLine,
    Home,
    LayoutDashboard,
    ListTodo,
    LogIn,
    LogOut,
    TimerIcon,
    UserIcon,
    UserRoundPlus,
} from 'lucide-react';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { NavBarContext, UserContext } from '@/routes/root/root.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip.tsx';
import TooltipHelper from '@/lib/TooltipHelper.tsx';

interface NotLoggedInSideBarProps {
    isOpen: boolean;
    isOpenWidth: string;
}

function NotLoggedInSideBar({ isOpen, isOpenWidth }: NotLoggedInSideBarProps) {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Login</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/login">
                        <LogIn />
                        {isOpen ? 'Login' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Register</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/">
                        <UserRoundPlus />
                        {isOpen ? 'Register' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
        </>
    );
}

interface LoggedInSideBarProps {
    isOpen: boolean;
    isOpenWidth: string;
}

function LoggedInSideBar({ isOpen, isOpenWidth }: LoggedInSideBarProps) {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Dashboard</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/login">
                        <LayoutDashboard />
                        {isOpen ? 'Dashboard' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Profile</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/">
                        <UserIcon />
                        {isOpen ? 'Profile' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Reminders</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/">
                        <TimerIcon />
                        {isOpen ? 'Reminders' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Logout</p>}>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                        to="/">
                        <LogOut />
                        {isOpen ? 'Logout' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator />
        </>
    );
}

export default function Navigation() {
    const { isOpen, setIsOpen } = useContext(NavBarContext);
    const isOpenStyling = isOpen ? 'w-64 p-2' : ' w-20 p-2';
    const isOpenWidth = isOpen ? 'w-6/12' : '';
    const { loggedIn } = useContext(UserContext);

    return (
        <div
            className={`absolute left-0 top-0 z-50 flex h-full flex-col items-center gap-4 bg-secondary text-primary ${isOpenStyling}`}>
            <div className="flex w-full justify-end">
                <TooltipHelper
                    tooltip={isOpen ? <p>Collapse</p> : <p>Expand</p>}>
                    <Button
                        className="bg-secondary text-primary hover:bg-primary hover:text-secondary"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
                    </Button>
                </TooltipHelper>
            </div>
            <div className="flex items-center justify-center gap-2">
                <ListTodo />
                {isOpen && <h1 className="text-3xl">Todo App</h1>}
            </div>
            <Separator />
            <div className="flex w-full flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                    <TooltipHelper tooltip={<p>Home</p>}>
                        <Link
                            className={`flex items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary ${isOpenWidth}`}
                            to="/">
                            <Home />
                            {isOpen ? 'Home' : ''}
                        </Link>
                    </TooltipHelper>
                </div>
                <Separator />
                {!loggedIn ? (
                    <NotLoggedInSideBar
                        isOpen={isOpen}
                        isOpenWidth={isOpenWidth}
                    />
                ) : (
                    <LoggedInSideBar
                        isOpen={isOpen}
                        isOpenWidth={isOpenWidth}
                    />
                )}
            </div>
        </div>
    );
}
