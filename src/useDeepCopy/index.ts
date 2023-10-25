export default function useDeepCopy(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }

  const isArray = Array.isArray(obj)
  const newObj: any = isArray ? [] : {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = useDeepCopy(obj[key])
    }
  }

  return newObj
}
