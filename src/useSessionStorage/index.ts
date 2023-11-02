import { ref, unref } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

const sl = {
  set<T>(key: string, value: T): void {
    if (key) sessionStorage?.setItem(key, JSON.stringify(value))
  },
  get<T>(key: string): T | null {
    const data = sessionStorage?.getItem(key)
    if (!data) return null
    try {
      return JSON.parse(data)
    } catch (e) {
      return null
    }
  },
  delete(key: string): void {
    if (key) sessionStorage?.removeItem(key)
  },
  clear(): void {
    sessionStorage?.clear()
  },
}

function getInitState<T>(key: string, value: T) {
  const sessionStorageValue = sl.get<T>(key) || null
  if (sessionStorageValue) {
    return sessionStorageValue
  }
  sl.set<T>(key, value)
  return value
}

export default function useSessionStorage<T>(
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
    sl.set<UnwrapRef<T>>(key, value)
  }
  const del = () => {
    state.value = undefined as UnwrapRef<T>
    sl.delete(key)
  }

  const clear = () => {
    state.value = undefined as UnwrapRef<T>
    sl.clear()
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
