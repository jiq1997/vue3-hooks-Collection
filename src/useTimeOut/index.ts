import { watchEffect, Ref, unref } from 'vue'

export default function useTimeout(
  fn: () => void,
  delay: Ref<number | undefined> | number | undefined,
  options?: {
    immediate?: boolean
  }
) {
  const immediate = options?.immediate
  if (immediate) fn()

  watchEffect((onInvalidate) => {
    const Delay = unref(delay)
    if (Delay === undefined || typeof Delay !== 'number' || Delay! < 0) return

    const timer = setTimeout(() => {
      fn()
    }, Delay)

    onInvalidate(() => {
      clearInterval(timer)
    })
  })
}
