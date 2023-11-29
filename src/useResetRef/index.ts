import { ref, toRaw, Ref, UnwrapRef } from 'vue'
import useDeepCopy from '../useDeepCopy'
import isObject from 'lodash-es/isObject'

export default function useResetRef<T>(
  initialValue: T
): [Ref<UnwrapRef<T>>, () => void] {
  const value = ref(initialValue)
  const flag = isObject(initialValue)
  const initialStateCopy = flag
    ? useDeepCopy(initialValue)
    : toRaw(initialValue)

  const resetValue = () => {
    value.value = initialStateCopy as UnwrapRef<T>
  }

  return [value, resetValue]
}
