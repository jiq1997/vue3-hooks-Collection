import { watch, nextTick } from 'vue'

import type { WatchCallback, WatchOptions, WatchSource } from 'vue'

export default function useOnceWatch<
  T = any,
  Immediate extends Readonly<boolean> = false
>(
  source: T | WatchSource<T>,
  cb: WatchCallback<T>,
  options?: WatchOptions<Immediate>
) {
  const stop = watch(
    source as any,
    (...args) => {
      // 执行一次后清除监听
      nextTick(() => stop())
      return cb(...args)
    },
    {
      ...options,
    }
  )
}
