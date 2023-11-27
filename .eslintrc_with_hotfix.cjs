module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: [
            'tsconfig.json',
        ],
        extraFileExtensions: ['.svelte'],
    },
    overrides: [
        {
            files: [
                '*.svelte',
            ],
            parser: 'svelte-eslint-parser',
            // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    rules: {
        // 'plugin:@typescript-eslint/recommended' is this:
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        // which incldes this:
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        //
        // Some rules from eslint-recommended.ts:
        'no-unsafe-negation': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
    },
};
