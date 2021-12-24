/** @format */

module.exports = {
    parser: '@typescript-eslint/parser', // 指定ESLint解析器
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 1,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['error'],
    },
};
