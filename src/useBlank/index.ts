export default function useBlank(value: any) {
  if (
    value === null ||
    value === undefined ||
    value === '' ||
    value === 'null' ||
    value === 'undefined'
  ) {
    return true
  }
  return false
}
