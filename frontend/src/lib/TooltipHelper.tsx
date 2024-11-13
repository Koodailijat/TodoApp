import { ReactNode } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip.tsx';

interface TooltipHelperProps {
    children: ReactNode;
    className?: string;
    tooltip: ReactNode;
}

export default function TooltipHelper({
    children,
    className,
    tooltip,
}: TooltipHelperProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild className={className}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
