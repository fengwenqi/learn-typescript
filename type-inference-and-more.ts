// 类型推论 - type inference
let strIn = 'str'
// strIn = 123 // Type 'number' is not assignable to type 'string'.ts(2322)


// 联合类型 - union types
let numberOrString: number | string = 123
numberOrString = 'abc'
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// numberOrString.length // Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.ts(2339)
numberOrString.toString()


// 类型断言 - type assertions
// 这里我们可以用 as 关键字，告诉typescript 编译器，你没法判断我的代码，但是我本人很清楚，这里我就把它看作是一个 string，你可以给他用 string 的方法。
function getLength(input: string | number): number {
    const str = input as string // 此处断言
    if (str.length) {
      return str.length
    } else {
      const number = input as number // 此处断言
      return number.toString().length
    }
}
// 下面是断言的快捷写法
function getLength2(input: string | number): number {
    if ((<string>input).length) { // 此处是断言，不是类型转换，而且联合类型只能断言成联合类型的其中一个类型，不能是别的类型。
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

// 类型守卫 - type guard
function getLength3(input: string | number): number {
    if (typeof input === 'string') {
      return input.length
    } else {
      return input.toString().length
    }
}
