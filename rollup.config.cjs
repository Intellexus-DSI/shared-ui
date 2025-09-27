const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const url = require('rollup-plugin-url');

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: false, // Inline CSS into the JS bundle
            plugins: [require('postcss-import')(), require('postcss-url')({ url: 'inline' })],
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'],
            limit: 100000000, // Inlines all assets as data URIs
            fileName: 'assets/[name][extname]'
        }),
    ],
    external: [
        'react',
        'react-dom',
        'react-bootstrap',
        '@mui/material',
        '@mui/icons-material',
        // add other peer dependencies here
    ],
}; 