import vue from '@vitejs/plugin-vue' // vue 支持
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import type { UserConfig, ConfigEnv } from 'vite'

/**
 * command 表示当前 Vite 的命令，可以是 'build'、'serve'
 * mode 表示当前的构建模式，通常是 'development' 或 'production'
 */
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // 路径别名
        '@hooks': resolve(__dirname, './build'),
      },
      extensions: ['.js', '.json', '.ts'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    /* 修改element-plus主题 */
    // css:{
    //   preprocessorOptions:{
    //     scss: {
    //       additionalData: `@use "@/assets/css/elementplus.scss" as *;`,
    //     },
    //   }
    // },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
}
