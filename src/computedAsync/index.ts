/*
 * @Description:
 * @Author: 纪泉
 * @Date: 2023-12-01 10:13:40
 * @LastEditors: 纪泉
 * @LastEditTime: 2023-12-04 09:19:18
 */
import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

type Fn = () => void
type AsyncComputedOnCancel = (cancelCallback: Fn) => void

export default function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: T
): Ref<T> {
  const current = ref(initialState) as Ref<T>
  let num = 0

  watchEffect(async (onInvalidate) => {
    num++
    const counterSum = num
    let isFinished = false

    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (!isFinished) cancelCallback()
        })
      })

      if (counterSum === num) current.value = result
    } finally {
      isFinished = true
    }
  })

  return current
}
