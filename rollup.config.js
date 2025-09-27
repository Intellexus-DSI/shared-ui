import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: true,
        }),
        copy({
            targets: [
                { src: 'src/assets', dest: 'dist' },
                { src: 'src/styles', dest: 'dist' }
            ]
        })
    ],
    external: [
        'react',
        'react-dom',
        'react-bootstrap',
        '@mui/material',
        '@mui/icons-material',
        // add other peer dependencies here
    ]
}; 