import { ref, watch, Ref } from 'vue'
import type { ThrottleSettings } from 'lodash-es/throttle'
import useThrottleFn from '../useThrottleFn'

interface Options extends ThrottleSettings {
  wait?: number
}

export default function useThrottle<T>(
  initialState: Ref<T>,
  options?: Options
): Ref<T | undefined> {
  const throttle = ref<T>(initialState.value) as Ref<T>
  const { run } = useThrottleFn(
    () => (throttle.value = initialState.value),
    options
  )
  watch(initialState, () => run(), { deep: true })
  return throttle
}
