// 定义一定范围内的常量
enum Direction
{
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Up) // 打印：0，默认枚举从0开始
console.log(Direction[0]) // 打印：UP

enum Direction2
{
    Up = 10,
    Down,
    Left,
    Right,
}
console.log(Direction2.Up) // 打印：10，人为赋值
console.log(Direction2.Down) // 打印：11

enum Direction3
{
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
console.log(Direction3.Up) // 打印：UP，人为赋值有意义的字符串
const value = 'UP'
if (value === Direction3.Up) {
  console.log('go up!') // 打印：go up!
}

const enum Direction4 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
console.log(Direction4.Up) // 打印：UP，常量枚举，提升性能
