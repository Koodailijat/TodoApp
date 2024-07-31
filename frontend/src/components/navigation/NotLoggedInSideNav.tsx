import { Link } from 'react-router-dom';
import { LogIn, UserRoundPlus } from 'lucide-react';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Separator } from '@/components/ui/separator.tsx';

interface NotLoggedInSideNavProps {
    isOpen: boolean;
}

export default function NotLoggedInSideNav({
    isOpen,
}: NotLoggedInSideNavProps) {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Login</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/login">
                        <LogIn />
                        {isOpen ? 'Login' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <TooltipHelper tooltip={<p>Register</p>}>
                    <Link
                        className="flex w-8/12 items-center justify-center gap-2 rounded-lg p-2 hover:bg-primary hover:text-secondary"
                        to="/signup">
                        <UserRoundPlus />
                        {isOpen ? 'Sign Up' : ''}
                    </Link>
                </TooltipHelper>
            </div>
            <Separator className="bg-gray-400" />
        </>
    );
}
