// 泛型generics意义：定义函数、接口或类的时候，故意不指定具体的类型，而是在使用的时候再指定具体的类型的特征。
/**
 * 运用泛型定义函数，T是泛型类型一个占位符，可以用任意字符，一般习惯用T占位。
 * @param arg 参数和返回值类型变量都是T，说明运行时，参数和返回值是相同的具体类型。
 */
function echo(arg) {
    return arg;
}
var str = 'abc';
var result = echo(str); //指定参数和返回值都是string类型，也可以运用类型推论。
var result2 = echo(123); // 参数是数字，返回值是数字
var result3 = echo(true); // 参数是bool，返回值是bool
/**
 * 元组tuple，是指有两个元素的数组，数组元素类型任意。该函数实现交换元组的元素内容。
 * @param tuple
 */
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result4 = swap(['abc', 123]);
console.log(result4);
// 约束泛型
function echoWithArr(arg) {
    // console.log(arg.length) // Property 'length' does not exist on type 'T'.ts(2339)
    return arg;
}
var result5 = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length); // 如果T不继承IWithLength，这里会报错
    return arg;
}
var result6 = echoWithLength('abc'); // 打印：3
var result7 = echoWithLength({ length: 10 }); // 打印：10
var result8 = echoWithLength([1, 2, 3]); // 打印：3
// 泛型类
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(123);
console.log(queue.pop().toFixed());
var queue2 = new Queue();
queue2.push('abc');
console.log(queue2.pop().length);
var kp1 = { key: 123, value: 'abc' };
var kp2 = { key: 'abc', value: 123 };
// 泛型数组
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
function plus(a, b) {
    return a + b;
}
function connect(a, b) {
    return a + b;
}
var fun = plus;
var fun2 = connect;
