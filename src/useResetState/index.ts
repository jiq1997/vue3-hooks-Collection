import { reactive, toRaw } from 'vue'
import useDeepCopy from '../useDeepCopy'

export default function useResetState<T extends object>(
  initialState: T
): [T, () => void] {
  let state = reactive(initialState) as T
  const initialStateCopy = useDeepCopy(initialState)

  const resetState = () => {
    const originalData = toRaw(initialStateCopy) // 转换为普通对象
    const reactiveData = reactive(originalData) // 转换为 reactive 对象
    Object.assign(state, reactiveData) // 用 reactive 对象覆盖原始对象
  }

  return [state, resetState]
}
