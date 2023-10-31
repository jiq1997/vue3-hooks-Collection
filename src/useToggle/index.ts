import { computed, Ref, ref, shallowReadonly, UnwrapRef } from 'vue'
import useBlank from '../useBlank'

export interface UseToggleActions<T> {
  // 切换状态
  toggle: () => void
  // 设置状态
  set: (value: T) => void
  // 设置初始化状态
  setDefault: () => void
  // 设置重置状态
  setReverse: () => void
}

function useToggle<T = boolean>(): [Ref<T>, UseToggleActions<T>]
function useToggle<T = boolean>(defaultValue: T): [Ref<T>, UseToggleActions<T>]
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [Ref<T | U>, UseToggleActions<T | U>]

function useToggle<T, U>(
  defaultValue: T = false as unknown as T,
  reverseValue?: U
) {
  const state = ref<T | U>(defaultValue)
  const action = computed(() => {
    // 获取当前的重置状态
    const reverseValueOrigin = (
      !useBlank(reverseValue) ? reverseValue : defaultValue
    ) as UnwrapRef<T> | UnwrapRef<U>
    const toggle = () => {
      state.value =
        state.value == defaultValue
          ? reverseValueOrigin
          : (defaultValue as UnwrapRef<T>)
    }
    const set = (value: UnwrapRef<T> | UnwrapRef<U>) => {
      state.value = value
    }
    const setDefault = () => {
      state.value = defaultValue as UnwrapRef<T>
    }
    const setReverse = () => {
      state.value = reverseValueOrigin
    }
    return {
      toggle,
      set,
      setDefault,
      setReverse,
    }
  })
  return [shallowReadonly(state), { ...action.value }]
}

export default useToggle
