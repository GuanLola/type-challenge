// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [k in T[number]]: k
}
