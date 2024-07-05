module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': ['error', 'windows'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/no-extraneous-dependencies': ["error", {"devDependencies": true}]
    },
};
