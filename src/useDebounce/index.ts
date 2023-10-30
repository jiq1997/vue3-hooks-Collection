import { ref, watch, Ref } from 'vue'
import type { DebounceSettings } from 'lodash-es/debounce'
import useDebounceFn from '../useDebounceFn'

interface Options extends DebounceSettings {
  wait?: number
}

export default function useDebounce<T>(
  initialState: Ref<T>,
  options?: Options
): Ref<T | undefined> {
  const debounced = ref<T>(initialState.value) as Ref<T>
  const { run } = useDebounceFn(
    () => (debounced.value = initialState.value),
    options
  )
  watch(initialState, () => run(), { deep: true })
  return debounced
}
