import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TooltipHelper from '@/lib/TooltipHelper.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/theme-provider.tsx';
import i18n from '@/i18n.ts';

interface ThemeSwitcherProps {
    isOpen: boolean;
}
export default function ThemeSwitcher({ isOpen }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();

    if (isOpen) {
        return (
            <div className="flex h-full flex-col justify-end gap-4">
                <div className="flex justify-center gap-4">
                    <Button
                        className="text-xs"
                        onClick={() => i18n.changeLanguage('en')}>
                        EN
                    </Button>
                    <Button
                        className="text-xs"
                        onClick={() => i18n.changeLanguage('fi')}>
                        FI
                    </Button>
                </div>
                <div className="w-56">
                    {theme === 'dark' && (
                        <TooltipHelper
                            tooltip={<p>{t('menu.switchToLightMode')}</p>}>
                            <Button
                                className="w-full"
                                onClick={() => setTheme('light')}>
                                {t('menu.switchToLightMode')}
                            </Button>
                        </TooltipHelper>
                    )}
                    {theme === 'light' && (
                        <TooltipHelper
                            tooltip={<p>{t('menu.switchToDarkMode')}</p>}>
                            <Button
                                className="w-full"
                                onClick={() => setTheme('dark')}>
                                {t('menu.switchToDarkMode')}
                            </Button>
                        </TooltipHelper>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col items-center justify-end gap-4">
            <div className="flex flex-col justify-center gap-4">
                <Button
                    className="text-xs"
                    onClick={() => i18n.changeLanguage('en')}>
                    EN
                </Button>
                <Button
                    className="text-xs"
                    onClick={() => i18n.changeLanguage('fi')}>
                    FI
                </Button>
            </div>
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
