function add(x: number, y: number, z?: number): number { // 参数是number类型，返回值是number类型
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

function add2(x: number, y: number, z: number = 10): number { // 参数有默认值同可选参数
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

add(1, 2)
add(1, 2, 3)

add2(1, 2)
add2(1, 2, 3)

// add3被推论为函数类型
const add3 = function (x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

// 声明add4是函数类型，并将add3赋值给add4
// 这里面的箭头不是es6的箭头函数，而是ts声明函数类型的方法
const add4: (x: number, y: number, z?: number) => number = add3

// interface 描述函数类型
interface ISum {
    (x: number, y: number, z?: number): number
}
const add5: ISum = add3
