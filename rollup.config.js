import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import { copyFileSync, mkdirSync } from 'fs';

export default {
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
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'],
            limit: 100000000, // Inlines all assets as data URIs
            fileName: 'assets/[name][extname]'
        }),
        postcss({
            extract: true,
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