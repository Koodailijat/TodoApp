import { Link } from 'react-router-dom';
import {
    ArrowLeftToLine,
    ArrowRightToLine,
    Home,
    ListTodo,
} from 'lucide-react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import LoggedInSideNav from '@/components/navigation/LoggedInSideNav.tsx';
import NotLoggedInSideNav from '@/components/navigation/NotLoggedInSideNav.tsx';
import ThemeSwitcher from '@/components/navigation/ThemeSwitcher.tsx';
import { NavBarContext } from '@/context/navBarContext.ts';
import { UserContext } from '@/context/userContext.ts';

export function SideNav() {
    const { isOpen, setIsOpen } = useContext(NavBarContext);
    const isOpenStyling = isOpen
        ? 'w-60 p-2 aria-expanded:true'
        : 'w-20 p-2 aria-expanded:false';
    const { loggedIn } = useContext(UserContext);
    const { t } = useTranslation();

    return (
        <div
            className={`absolute left-0 top-0 z-50 flex h-full flex-col items-center gap-4 bg-secondary text-primary ${isOpenStyling}`}>
            <div
                className={`flex w-full ${isOpen ? 'justify-end' : 'justify-center'}`}>
                <TooltipHelper
                    tooltip={
                        isOpen ? (
                            <p>{t('menu.collapse')}</p>
                        ) : (
                            <p>{t('menu.expand')}</p>
                        )
                    }>
                    <Button
                        aria-label={t('menu.toggleNavigation')}
                        className="bg-secondary text-primary hover:bg-primary hover:text-secondary"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
                    </Button>
                </TooltipHelper>
            </div>
            <div className="flex h-16 items-center justify-center gap-2">
                <ListTodo />
                {isOpen && <h1 className="text-3xl">Todo App</h1>}
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                    <TooltipHelper tooltip={<p>{t('menu.home')}</p>}>
                        <Link
                            className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                            to="/">
                            <Home />
                            {isOpen ? t('menu.home') : ''}
                        </Link>
                    </TooltipHelper>
                </div>
                <Separator className="bg-gray-400" />
                {!loggedIn ? (
                    <NotLoggedInSideNav isOpen={isOpen} />
                ) : (
                    <LoggedInSideNav isOpen={isOpen} />
                )}
            </div>

            <ThemeSwitcher isOpen={isOpen} />
        </div>
    );
}
