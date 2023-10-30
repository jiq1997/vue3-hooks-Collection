import debounce from 'lodash-es/debounce'
import { ref, onBeforeUnmount, watch, Ref } from 'vue'
import type { DebounceSettings } from 'lodash-es/debounce'

interface Options extends DebounceSettings {
  wait?: number
}

type Fn = (...args: any) => any

export default function useDebounceFn<T extends Fn>(fn: T, options?: Options) {
  const wait = options?.wait ?? 1000
  const debounced = debounce(fn, wait, options)
  onBeforeUnmount(() => {
    debounced.cancel()
  })
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  }
}
