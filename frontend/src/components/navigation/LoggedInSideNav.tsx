import { Link } from 'react-router-dom';
import { LayoutDashboard, LogOut, TimerIcon, UserRound } from 'lucide-react';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { storageKeys } from '@/constants/storageKeys.ts';
import { useContext } from 'react';
import { UserContext } from '@/routes/root/Root.tsx';

interface LoggedInSideNavProps {
    isOpen: boolean;
}

export default function LoggedInSideNav({ isOpen }: LoggedInSideNavProps) {
    const { setLoggedIn } = useContext(UserContext);
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Dashboard</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/login">
                        <LayoutDashboard />
                        {isOpen ? 'Dashboard' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Profile</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <UserRound />
                        {isOpen ? 'Profile' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Reminders</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <TimerIcon width="24" height="24" />
                        {isOpen ? 'Reminders' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Logout</p>}>
                    <Link
                        onClick={() => {
                            localStorage.removeItem(storageKeys.accessToken);
                            setLoggedIn(false);
                        }}
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <LogOut />
                        {isOpen ? 'Logout' : ''}
                    </Link>
                </TooltipHelper>
            </div>
        </>
    );
}
