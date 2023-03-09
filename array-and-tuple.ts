//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)
// arrOfNumbers.push('abc') // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)


// arguments是类数组，有数组的length属性，但是没有数组的方法
function test() {
    console.log(arguments)
    arguments.length
    // arguments.forEach() // Property 'forEach' does not exist on type 'IArguments'.ts(2339)
}


// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['qiqi', 20]
//但是当我们写少一项 就会报错 同样写多一项也会有问题
// user = ['molly', 20, true] // Type '[string, number, boolean]' is not assignable to type '[string, number]'.Source has 3 element(s) but target allows only 2.ts(2322)
