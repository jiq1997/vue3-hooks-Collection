import type { Ref } from 'vue'
import useToggle from '../useToggle'

export interface UseBooleanActions {
  toggle: () => void
  set: (value: boolean) => void
  setTrue: () => void
  setFalse: () => void
}

export type UseBooleanResult = [Readonly<Ref<boolean>>, UseBooleanActions]

export default function useBoolean(defaultValue = false): UseBooleanResult {
  const [state, { set, toggle }] = useToggle(defaultValue, !defaultValue)
  const actions = {
    toggle,
    set: (v: boolean) => set(!!v),
    setTrue: () => set(true),
    setFalse: () => set(false),
  }
  return [state, actions]
}
