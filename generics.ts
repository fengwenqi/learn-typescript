// 泛型generics意义：定义函数、接口或类的时候，故意不指定具体的类型，而是在使用的时候再指定具体的类型的特征。

/**
 * 运用泛型定义函数，T是泛型类型一个占位符，可以用任意字符，一般习惯用T占位。
 * @param arg 参数和返回值类型变量都是T，说明运行时，参数和返回值是相同的具体类型。
 */
function echo<T>(arg: T): T {
    return arg
}

const str: string = 'abc'
const result: string = echo(str) //指定参数和返回值都是string类型，也可以运用类型推论。
const result2: number = echo(123) // 参数是数字，返回值是数字
const result3: boolean = echo(true) // 参数是bool，返回值是bool

/**
 * 元组tuple，是指有两个元素的数组，数组元素类型任意。该函数实现交换元组的元素内容。
 * @param tuple
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result4: [number, string] = swap(['abc', 123])
console.log(result4)


// 约束泛型
function echoWithArr<T>(arg: T): T {
    // console.log(arg.length) // Property 'length' does not exist on type 'T'.ts(2339)
    return arg
}
const result5: number[] = echoWithArr([1, 2, 3])

// 想将上面方法改成支持所有拥有length属性的参数，可以使用约束泛型
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length) // 如果T不继承IWithLength，这里会报错
    return arg
}
const result6: string = echoWithLength('abc') // 打印：3
const result7: Object = echoWithLength({length: 10}) // 打印：10
const result8: Array<number> = echoWithLength([1, 2, 3]) // 打印：3
// const result9 = echoWithLength(123) // Argument of type 'number' is not assignable to parameter of type 'IWithLength'.ts(2345)


// 泛型类
class Queue<T> {
    private data = [];
    push (item: T) {
        return this.data.push(item)
    }
    pop (): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(123)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('abc')
console.log(queue2.pop().length)


// 泛型接口
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = {key: 123, value: 'abc'}
let kp2: KeyPair<string, number> = {key: 'abc', value: 123}


// 泛型数组
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]


// 用interface描述函数类型
interface IPlus<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b
}
function connect(a: string, b: string): string {
    return a + b
}
const fun: IPlus<number> = plus
const fun2: IPlus<string> = connect
