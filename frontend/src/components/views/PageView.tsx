import { ReactNode, useContext } from 'react';
import { NavBarContext } from '@/routes/root/root.tsx';

interface PageViewProps {
    children: ReactNode;
}

export default function PageView({ children }: PageViewProps) {
    const { isOpen } = useContext(NavBarContext);
    const isOpenStyle = isOpen ? 'ml-60' : 'ml-20';
    return (
        <div className="size-full bg-primary-foreground">
            <div
                className={`${isOpenStyle} h-screen bg-primary-foreground p-6`}>
                {children}
            </div>
        </div>
    );
}
