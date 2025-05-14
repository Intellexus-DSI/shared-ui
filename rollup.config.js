import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Ensure assets directory exists
mkdirSync('dist/assets', { recursive: true });

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
        {
            name: 'copy-assets',
            buildEnd() {
                // Copy assets to dist/assets
                copyFileSync('src/NavBar/InetellexusLogo.png', 'dist/assets/InetellexusLogo.png');
            }
        },
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.svg'],
            limit: 0,
            fileName: '[name][extname]',
            publicPath: '/assets/',
        }),
    ],
}; 