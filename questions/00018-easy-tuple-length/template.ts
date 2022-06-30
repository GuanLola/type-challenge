// type Length<T> = any
type Length<T extends readonly (number | string | symbol)[]> = T['length']
// type Length<T extends readonly (number | string | symbol)[]> = T.length
