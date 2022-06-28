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
const extensions = ['.js', '.ts', '.tsx', '.json']
const env = process.env.NODE_ENV
let bundleName = 'bundle.js'
console.log(env,'dev')
export default {
  input: "main.tsx",
  output: [
    {
      file: 'dist/' + bundleName,
      format: "umd",
      sourcemap: true,
    },
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
      template:() => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div id="root"></div>
          <script src='${bundleName}' ></script>
      </body>
      </html>`,
    },

    ),
    peerDepsExternal(),
    typescript(),
    serve('dist')
  ]
};