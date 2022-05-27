import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs()
  ],
};
