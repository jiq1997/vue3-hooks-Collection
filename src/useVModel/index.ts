import { computed, getCurrentInstance } from 'vue'

export default function useVModel<
  P extends object,
  Name extends string,
  K extends keyof P
>(props: P, emit?: (name: Name, ...args: any[]) => void, key?: K) {
  const vm = getCurrentInstance()
  const _emit = emit || vm?.emit || vm?.proxy?.$emit?.bind(vm?.proxy)

  if (!key) key = 'modelValue' as K
  let event = `update:${key!.toString()}` as Name

  const getValue = () => props[key!]

  const triggerEmit = (value: P[K]) => {
    if (_emit) _emit(event, value)
  }

  return computed<P[K]>({
    get() {
      return getValue()!
    },
    set(value) {
      triggerEmit(value)
    },
  })
}
