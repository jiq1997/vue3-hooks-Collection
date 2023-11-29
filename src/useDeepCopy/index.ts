import cloneDeep from 'lodash-es/cloneDeep'

export default function useDeepCopy(obj: any): any {
  return cloneDeep(obj)
}
