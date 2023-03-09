// type aliases: 定义类型别名
// 这里面的箭头不是es6的箭头函数，而是ts声明函数类型的方法
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y
}

const sum2: (x: number, y: number) => number = sum
const sum3: PlusType = sum

// 应用场景：联合类型
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// 联合类型（或的概念）
type StrOrNumber = string | number
let result1: StrOrNumber = '123'
result1 = 123

// 字符串字面量
const str1: 'name' = 'name'
const number1: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'

// 交叉类型 Intersection Types（与的概念）
interface IName  {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'hello', age: 12}
