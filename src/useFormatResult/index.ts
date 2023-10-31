import { computed, Ref, ComputedRef, unref } from 'vue'

function useFormatResult<T, F>(
  data: T | Ref<T>,
  formatResultCallback: (data: T) => F
): ComputedRef<F> {
  const formatResultData = computed(() => formatResultCallback(unref(data)))
  return formatResultData
}

export default useFormatResult
