import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const minify = !process.env.MINIFY;
const input = 'src/SvelteTooltip.svelte';
const name = 'SvelteTooltip';

const plugins = [
  svelte(),
  resolve(),
  commonjs(),
  minify && terser(),
]

export default [
  {
    input,
    output: {
      customElement: true,
      sourcemap: true,
      format: 'cjs',
      name,
      file: 'dist/cjs/SvelteTooltip.js'
    },
    plugins
  },
  {
    input,
    output: {
      customElement: true,
      sourcemap: true,
      format: 'es',
      name,
      file: pkg.module
    },
    plugins
  },
  {
    input,
    output: {
      customElement: true,
      sourcemap: true,
      format: 'umd',
      name,
      file: pkg.main
    },
    plugins
  },
  {
    input,
    output: {
      customElement: true,
      sourcemap: true,
      format: 'iife',
      name,
      file: 'dist/iife/SvelteTooltip.js'
    },
    plugins
  },
];