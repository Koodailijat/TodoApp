import { Link } from 'react-router-dom';
import { LayoutDashboard, LogOut, TimerIcon, UserRound } from 'lucide-react';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Separator } from '@/components/ui/separator.tsx';

interface LoggedInSideNavProps {
    isOpen: boolean;
    isOpenWidth: string;
}

export default function LoggedInSideNav({
    isOpen,
    isOpenWidth,
}: LoggedInSideNavProps) {
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
                        <UserRound />
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
