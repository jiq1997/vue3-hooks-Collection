import { ref, Ref, UnwrapRef, unref } from 'vue'

type SetStateAction<T> = T | ((prevState: UnwrapRef<T>) => T)

export default function useState<T>(
  initialState?: T
): [Ref<T>, (state: SetStateAction<T>) => void] {
  const state = ref(initialState) as Ref<T>

  const setState = (action: SetStateAction<T>): void => {
    if (typeof action === 'function') {
      state.value = (action as (prevState: UnwrapRef<T>) => T)(
        unref(state as Ref)
      )
    } else {
      state.value = action
    }
  }

  return [state, setState]
}
