import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/theme-provider.tsx';

interface ThemeSwitcherProps {
    isOpen: boolean;
}
export default function ThemeSwitcher({ isOpen }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();

    if (isOpen) {
        return (
            <div className="flex h-full flex-col justify-end gap-4">
                <div>
                    {theme === 'dark' && (
                        <TooltipHelper
                            tooltip={<p>{t('menu.switchToLightMode')}</p>}>
                            <Button onClick={() => setTheme('light')}>
                                {t('menu.switchToLightMode')}
                            </Button>
                        </TooltipHelper>
                    )}
                    {theme === 'light' && (
                        <TooltipHelper
                            tooltip={<p>{t('menu.switchToDarkMode')}</p>}>
                            <Button onClick={() => setTheme('dark')}>
                                {t('menu.switchToDarkMode')}
                            </Button>
                        </TooltipHelper>
                    )}
                </div>
                <div className="flex justify-center gap-4">
                    <Button className="text-xs">EN</Button>
                    <Button className="text-xs">FI</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col items-center justify-end gap-4">
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
            <div className="flex flex-col justify-center gap-4">
                <Button className="text-xs">EN</Button>
                <Button className="text-xs">FI</Button>
            </div>
        </div>
    );
}
