import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type SomeF = (a: number, b: string) => number
type FinalF = AppendArgument<SomeF, boolean> 

interface T {
    (x: boolean, a: number, b: string) => number
}

type cases = [
  Expect<Equal<FinalF, T>>
]
