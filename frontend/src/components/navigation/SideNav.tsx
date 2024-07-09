import { Link } from 'react-router-dom';
import {
    ArrowLeftToLine,
    ArrowRightToLine,
    Home,
    ListTodo,
} from 'lucide-react';
import { useContext } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { NavBarContext, UserContext } from '@/routes/root/root.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import LoggedInSideNav from '@/components/navigation/LoggedInSideNav.tsx';
import NotLoggedInSideNav from '@/components/navigation/NotLoggedInSideNav.tsx';

export default function SideNav() {
    const { isOpen, setIsOpen } = useContext(NavBarContext);
    const isOpenStyling = isOpen
        ? 'w-64 p-2 aria-expanded:true'
        : ' w-20 p-2 aria-expanded:false';
    const isOpenWidth = isOpen ? 'w-6/12' : '';
    const { loggedIn } = useContext(UserContext);

    return (
        <div
            className={`absolute left-0 top-0 z-50 flex h-full flex-col items-center gap-4 bg-secondary text-primary ${isOpenStyling}`}>
            <div className="flex w-full justify-end">
                <TooltipHelper
                    tooltip={isOpen ? <p>Collapse</p> : <p>Expand</p>}>
                    <Button
                        aria-label="Toggle navigation"
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
                    <NotLoggedInSideNav
                        isOpen={isOpen}
                        isOpenWidth={isOpenWidth}
                    />
                ) : (
                    <LoggedInSideNav
                        isOpen={isOpen}
                        isOpenWidth={isOpenWidth}
                    />
                )}
            </div>
        </div>
    );
}
