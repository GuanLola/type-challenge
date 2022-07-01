// type MyAwaited = any
type MyAwaited<T extends Promise<any>> = T extends Promise<infer x> ? x extends Promise<any> ? MyAwaited<x> : x : never

// type arr = [string, number, string]
// const mixedArray: arr = ['a', 2, 'c']

// const first = mixedArray[0] // string
// const second = mixedArray[1] // number

// type InferArray<T> = T extends(infer U)[] ? U : never

// type I0 = InferArray<[string, number]> // number | string

// type I1 = InferArray<string[]>

// type I2 = InferArray<number[]>

// type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _] ? P : never
// type I3 = InferFirst<[3, 2, 1]>

// type InferLast<T extends unknown[]> = T extends [...infer _, infer P] ? P : never
// type I4 = InferLast<[3, 2, 1]>

// type InferParameters<T extends Function> = T extends (...args: infer R) => any ? R : never
// type I5 = InferParameters<((arg1: string, arg2: number) => void)> // [string, number]

// type InferReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never
// type I6 = InferReturnType<(() => string)>

// type InferShift<T extends any[]> = T extends [infer P, ...infer R] ? [...R] : []
// type I7 = InferShift<[string, number, number]>

// type InferPop<T extends any[]> = T extends [...infer L, infer B] ? [...L] : []
// type I8 = InferPop<[string, number, number]>

/* type InferReverse<T extends unknown[], U extends unknown[] = []> = [] extends T
  ? U
  : T extends [infer L, ...infer R]
    ? InferReverse<R, [L, ...U]>
    : U */
type InferReverse<T extends string = string, U extends unknown[] = [number, boolean]> = [] extends T
  ? U
  : T extends [infer L, ...infer R]
    ? [L, R]
    : U

type I9 = InferReverse<'a', [number, boolean]> // [boolean, number, string]

// type I10 = InferReverse<[string, number, boolean, boolean, void]> // [void, boolean, boolean, number, string]

/*
T 是有东西的
T 是整一块[string, number, boolean]

U是空数组 [] 初始化就给了空[]

第一次 T extends [infer L, ...infer R] 是对的
所以就接着下来的自调（自己调自己）
[string, [number, boolean]]

这次传值T就是string了, U就是[number, boolean]

第二次
*/

/*
InferReverse<R, [L, ...U]> 自调

[infer L, ...infer R] 代表
[ string,       number, boolean ]

所以  Fn<R, [L, ...U]>
等于 [number, boolean,     string]

自调
T extends [infer L, ...infer R]
等于 [number, boolean,  string]
*/
