import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
    ],
    external: ['react', 'react-dom', 'react-router-dom', 'react-bootstrap'],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: true,
            modules: true,
            use: ['sass'],
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.svg'],
            limit: 0,
            fileName: '[name][extname]',
            publicPath: 'assets/',
        }),
    ],
}; 