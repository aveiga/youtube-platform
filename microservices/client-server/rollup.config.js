import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

let plugins = [
  nodeResolve({
    extensions: ['.js'],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  babel({
    presets: ['@babel/preset-react'],
  }),
  commonjs(),
];

if (process.env.ENV !== 'PROD') {
  plugins.concat(livereload({ watch: 'public/frontend-dist' }));
}

export default {
  input: 'src/frontend/index.js',
  output: {
    file: 'public/frontend-dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: plugins,
};
