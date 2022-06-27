import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import html from "@rollup/plugin-html";
import del from "rollup-plugin-delete";
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace';
import babel from "@rollup/plugin-babel";
import builtins from 'rollup-plugin-node-builtins';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json'
const extensions = ['.js', '.ts', '.tsx', '.json']
export default {
  input: "main.tsx",
  //external: Object.keys(pkg.peerDependencies || {}) ,//.concat('react-dom'),
  output: [
    {
      file: 'dist/bundle.js',
      format: "umd",
/*       globals: {
        react: 'React',
        //'react-dom': 'ReactDOM',
      }, */
      sourcemap: true,
    },
/*     {
      file: 'dist/bundle.min.js',
      format: "esm",
      plugins:[terser()]
    } */
  ],
  plugins: [
    resolve({extensions}),
    commonjs(),
    builtins(),
    babel(),
    del(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    //replace(),
    html({
    }),
    peerDepsExternal(),
    typescript(),
    serve('dist')
  ]
};