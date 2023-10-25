import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state() {
    return {
      token: null,
    }
  },
  getters: {
    GETTOKEN(state) {
      return state.token
    },
  },
  actions: {
    SETTOKEN(val: any) {
      this.token = val
    },
  },
  // 将会同步当前store中的所有数据到本地存储，依赖 pinia-plugin-persistedstate 插件
  // persist: true
})

export default useStore
