import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {ignores: ['**/dist', "frontend/src/components/ui", "**/.prettierrc.cjs", "frontend/tailwind.config.js", "frontend/src/hooks/use-toast.ts"]},
    {
        files: ['backend/**/*.{ts}'],
        languageOptions: {globals: globals.node},
    },
    {
        files: ['frontend/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-console': ['error', {allow: ['error']}],
        },
    },
];
