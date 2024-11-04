import { Link } from 'react-router-dom';
import { LayoutDashboard, LogOut, TimerIcon, UserRound } from 'lucide-react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { storageKeys } from '@/constants/storageKeys.ts';
import { queryClient } from '@/queries/queryClient.ts';
import { UserContext } from '@/context/userContext.ts';

interface LoggedInSideNavProps {
    isOpen: boolean;
}

export default function LoggedInSideNav({ isOpen }: LoggedInSideNavProps) {
    const { setLoggedIn } = useContext(UserContext);
    const { t } = useTranslation();
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>{t('menu.dashboard')}</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/dashboard">
                        <LayoutDashboard />
                        {isOpen ? t('menu.dashboard') : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>{t('menu.profile')}</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <UserRound />
                        {isOpen ? t('menu.profile') : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>{t('menu.reminders')}</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <TimerIcon width="24" height="24" />
                        {isOpen ? t('menu.reminders') : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>{t('menu.logout')}</p>}>
                    <Link
                        onClick={() => {
                            queryClient.clear();
                            localStorage.removeItem(storageKeys.accessToken);
                            setLoggedIn(false);
                        }}
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/">
                        <LogOut />
                        {isOpen ? t('menu.logout') : ''}
                    </Link>
                </TooltipHelper>
            </div>
        </>
    );
}
