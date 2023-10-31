import { ref } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

type PromiseType<T, P> = Promise<T> | ((...args: P[]) => Promise<T>)

type AsyncStateReturn<T, P> = {
  data: Ref<UnwrapRef<T>>
  loading: Ref<boolean>
  run: (...args: P[]) => Promise<T>
}

type AsyncStateOptions<T> = {
  manual?: boolean
  onSuccess?: (data: T) => void
  onError?: (error: unknown) => void
}

export default function useAsyncState<T, P extends any[]>(
  promise: PromiseType<T, P>,
  options?: AsyncStateOptions<T>
): AsyncStateReturn<T, P> {
  const { onSuccess, onError, manual } = options || {}
  const state = ref()
  const loading = ref<boolean>(false)

  async function execute(...args: any[]) {
    loading.value = true

    const _promise =
      typeof promise === 'function' ? promise(...(args as P)) : promise

    try {
      const data = await _promise
      state.value = data
      loading.value = true
      onSuccess?.(data)
    } catch (e) {
      onError?.(e)
    } finally {
      loading.value = false
    }

    return state.value as T
  }
  if (!manual) {
    execute()
  }
  return {
    data: state,
    run: execute,
    loading,
  }
}
