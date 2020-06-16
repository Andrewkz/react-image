import nodeResolve from 'rollup-plugin-node-resolve' // 帮助寻找node_modules里的包
import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
import typescriptPlugin from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace' // 替换待打包文件里的一些变量，如 process在浏览器端是不存在的，需要被替换
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify' // 压缩包
import typescript from 'typescript'

const isDev = process.env.NODE_ENV !== 'production'
const env = process.env.NODE_ENV

export default {
  input: 'src/index.ts',
  output: {
    name: 'ReactImage',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    typescriptPlugin({
      exclude: 'node_modules/**',
      typescript
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: [
        '@babel/preset-react',
        '@babel/preset-env',
        [
          '@babel/preset-typescript',
          {
            isTSX: true,
            allExtensions: true
          }
        ]
      ],
      // extensions: ['tsx', '.ts', 'js', 'jsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    !isDev && terser(),
    !isDev && uglify({
      compress: {
        'pure_getters': true,
        unsafe: true,
        'unsafe_comps': true
      }
    })
  ]
}
