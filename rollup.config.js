import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/dist.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' },
        { src: 'resources/**/*', dest: 'dist/resources' },
      ]
    })
  ],
};
