import { ref, toRaw } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

export default function useResetRef<T>(
  initialValue: T
): [Ref<UnwrapRef<T>>, () => void] {
  const value = ref(initialValue)
  const initialStateCopy = toRaw(initialValue)

  const resetValue = () => {
    value.value = initialStateCopy as UnwrapRef<T>
  }

  return [value, resetValue]
}
