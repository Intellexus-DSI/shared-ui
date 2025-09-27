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
            limit: 0, // always copy assets, don’t inline
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
    buildEnd() {
        // Ensure directories exist
        mkdirSync('dist/assets', { recursive: true });
        mkdirSync('dist/styles', { recursive: true });

        // Copy asset files
        copyFileSync('src/assets/InetellexusLogo.png', 'dist/assets/InetellexusLogo.png');
        copyFileSync('src/assets/logo_erc.png', 'dist/assets/logo_erc.png');
        copyFileSync('src/assets/logo_reichman_university.png', 'dist/assets/logo_reichman_university.png');
        copyFileSync('src/assets/logo_uni_hamburg.png', 'dist/assets/logo_uni_hamburg.png');
        copyFileSync('src/assets/navigtion_background.jpg', 'dist/assets/navigtion_background.jpg');

        // Copy style files
        copyFileSync('src/styles/Footer.css', 'dist/styles/Footer.css');
        copyFileSync('src/styles/NavBar.css', 'dist/styles/NavBar.css');
    }
}; 