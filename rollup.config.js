import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

const isProd = process.env.NODE_ENV
const outputDir = isProd ? 'build' : 'example/build'

// 基础插件
const basePlugins = [
  // 查找和打包node_modules中的第三方模块
  nodeResolve(),
  // 将 CommonJS 转换成 ES2015
  commonjs(),
  // 解析TypeScript
  typescript({
    tsconfigOverride: {
      compilerOptions: {
        declaration: false,
      },
    },
  }),
]
// dev 环境插件
const devPlugins = []
// pre 环境插件
const prodPlugins = [
  babel({
    babelHelpers: 'bundled',
  }),
]

const plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins)

const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `${outputDir}/index.es.js`,
        format: 'esm',
        globals: {
          vue: 'Vue',
        },
      },
      {
        file: `${outputDir}/index.cjs.js`,
        format: 'cjs',
        globals: {
          vue: 'Vue',
        },
      },
      {
        name: 'vue3Hooks',
        file: `${outputDir}/index.js`,
        format: 'umd',
        globals: {
          vue: 'Vue',
        },
        plugins: [terser()],
      },
    ],
    plugins: plugins,
    external: ['vue', 'vue-router'],
  },
  {
    input: 'src/index.ts',
    output: {
      file: `${outputDir}/index.d.ts`,
      format: 'esm',
    },
    plugins: [dts()],
    external: ['vue'],
  },
]

export default configs
