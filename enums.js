// 定义一定范围内的常量
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 打印：0，默认枚举从0开始
console.log(Direction[0]); // 打印：UP
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 10] = "Up";
    Direction2[Direction2["Down"] = 11] = "Down";
    Direction2[Direction2["Left"] = 12] = "Left";
    Direction2[Direction2["Right"] = 13] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // 打印：10，人为赋值
console.log(Direction2.Down); // 打印：10
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up); // 人为赋值有意义的字符串
console.log("UP" /* Direction4.Up */); // 常量枚举，提升性能
