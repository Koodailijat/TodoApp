import { Moon, Sun } from 'lucide-react';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/theme-provider.tsx';

interface ThemeSwitcherProps {
    isOpen: boolean;
}
export default function ThemeSwitcher({ isOpen }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();

    if (isOpen) {
        return (
            <div className="flex h-full flex-col justify-end">
                <div>
                    {theme === 'dark' && (
                        <TooltipHelper tooltip={<p>Toggle light mode</p>}>
                            <Button onClick={() => setTheme('light')}>
                                Switch to light mode
                            </Button>
                        </TooltipHelper>
                    )}
                    {theme === 'light' && (
                        <TooltipHelper tooltip={<p>Toggle dark mode</p>}>
                            <Button onClick={() => setTheme('dark')}>
                                Switch to dark mode
                            </Button>
                        </TooltipHelper>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col justify-end">
            <div>
                {theme === 'dark' && (
                    <TooltipHelper tooltip={<p>Toggle light mode</p>}>
                        <Button onClick={() => setTheme('light')} size="icon">
                            <Sun />
                        </Button>
                    </TooltipHelper>
                )}
                {theme === 'light' && (
                    <TooltipHelper tooltip={<p>Toggle dark mode</p>}>
                        <Button onClick={() => setTheme('dark')} size="icon">
                            <Moon />
                        </Button>
                    </TooltipHelper>
                )}
            </div>
        </div>
    );
}
