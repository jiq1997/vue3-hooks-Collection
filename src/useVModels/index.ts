import type { ToRefs } from 'vue'
import useVModel from '../useVModel'

export default function useVModels<P extends object, Name extends string>(
  props: P,
  emit: (name: Name, ...args: any[]) => void
): ToRefs<P> {
  const ret: any = {}

  for (const key in props) {
    ret[key] = useVModel(props, emit, key)
  }
  return ret
}
