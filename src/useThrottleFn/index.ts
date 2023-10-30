import throttle from 'lodash-es/throttle'
import { ref, onBeforeUnmount, watch, Ref } from 'vue'
import type { ThrottleSettings } from 'lodash-es/throttle'

interface Options extends ThrottleSettings {
  wait?: number
}

type Fn = (...args: any) => any

export default function <T extends Fn>(fn: T, options?: Options) {
  const wait = options?.wait ?? 1000
  const throttled = throttle(fn, wait, options)
  onBeforeUnmount(() => {
    throttled.cancel()
  })
  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  }
}
