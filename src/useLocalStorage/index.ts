import { ref, unref } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

const ls = {
  set<T>(key: string, value: T, aliveTime?: number): void {
    if (aliveTime) {
      const data = {
        obj: value,
        aliveTime: aliveTime,
      }
      localStorage?.setItem(key, JSON.stringify(data))
    } else {
      localStorage?.setItem(key, JSON.stringify(value))
    }
  },
  delete(key: string): void {
    if (key) localStorage?.removeItem(key)
  },
  clear(): void {
    localStorage?.clear()
  },
  get<T>(key: string): T | null {
    const localData = localStorage?.getItem(key)
    if (!localData) return null
    try {
      const data = JSON.parse(localData)
      if (data.aliveTime) {
        if (new Date().getTime() >= data.aliveTime) {
          // 超时
          this.delete(key)
          return null
        } else {
          return data.obj
        }
      } else {
        return data
      }
    } catch (e) {
      return null
    }
  },
}

function getInitState<T>(key: string, value: T) {
  const localStorageValue = ls.get<T>(key) || null
  if (localStorageValue) {
    return localStorageValue
  }
  ls.set<T>(key, value)
  return value
}

export default function useLocalStorage<T>(
  key: string,
  value: T
): [
  Ref<UnwrapRef<T>>,
  {
    set: (value: UnwrapRef<T>) => void
    del: () => void
    clear: () => void
  }
] {
  const state = ref<T>(getInitState<T>(key, value))

  const set = (value: UnwrapRef<T>) => {
    state.value = unref(value)
    ls.set<UnwrapRef<T>>(key, value)
  }
  const del = () => {
    state.value = undefined as UnwrapRef<T>
    ls.delete(key)
  }

  const clear = () => {
    state.value = undefined as UnwrapRef<T>
    ls.clear()
  }

  return [
    state,
    {
      set,
      del,
      clear,
    },
  ]
}
