import { ReactNode, useContext } from 'react';
import { NavBarContext } from '@/context/navBarContext.ts';

interface PageViewProps {
    children: ReactNode;
}

export default function PageView({ children }: PageViewProps) {
    const { isOpen } = useContext(NavBarContext);
    const isOpenStyle = isOpen ? 'ml-60' : 'ml-20';
    return (
        <div className="size-full bg-background">
            <div
                className={`${isOpenStyle} flex h-screen flex-col gap-4 bg-background p-8`}>
                {children}
            </div>
        </div>
    );
}
