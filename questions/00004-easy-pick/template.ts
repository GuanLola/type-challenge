// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
 