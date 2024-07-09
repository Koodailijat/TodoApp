import { Link } from 'react-router-dom';
import { LogIn, UserRoundPlus } from 'lucide-react';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Separator } from '@/components/ui/separator.tsx';

interface NotLoggedInSideNavProps {
    isOpen: boolean;
    isOpenWidth: string;
}

export default function NotLoggedInSideNav({
    isOpen,
    isOpenWidth,
}: NotLoggedInSideNavProps) {
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
