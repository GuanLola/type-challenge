// type MyExclude<T, U> = any
type MyExclude<T, U> = T extends U ? never : T

type P<T> = T extends 'x' ? string : number
type A1 = P<'x' | 'y'> // number
type A2 = P<never> // string
