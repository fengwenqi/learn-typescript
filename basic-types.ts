let isDone: boolean = true

// 接下来来到 number，注意 es6 还支持2进制和8进制，让我们来感受下
let age: number = 20
let binaryNumber: number = 0b1111

// 之后是字符串，注意es6新增的模版字符串也是没有问题的
let firstName: string = 'qiqi'
let message: string = `hello ${firstName}`

// 还有就是两个奇葩兄弟两，undefined 和 null
let u: undefined = undefined
let n: null = null

// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num: number = undefined


let notSure: any = 123
notSure = 'abc'
notSure = true

// 在任意值上访问任何属性都是允许的：
notSure.message
// 也允许调用任何方法：
notSure.getMessage()


