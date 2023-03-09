class Animal {
    name: string; // 默认是public
    static categories: string[] = ['mammal', 'bird'] // 静态属性
    static isAnimal(a) { // 静态方法
        return a instanceof Animal
    }
    constructor (name: string) {
        this.name = name
    }
    run () {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.run())
console.log(Animal.categories)
console.log(Animal.isAnimal(snake))
// 编译并运行ts，需要tsc后，再node；为了节省步骤，可以全局安装ts-node
// npm install -g ts-node
// 执行命令：ts-node class.ts

// 子类添加方法
class Dog extends Animal{
    bark () {
        return `${this.name} is barking`
    }
}

const myDog = new Dog('xiaobao')
console.log(myDog.run())
console.log(myDog.bark())

// 子类改写父类方法，实现多态
class Cat extends Animal{
    constructor (name) {
        super(name)
    }
    run () {
        return 'Meow,' + super.run()
    }
}

const myCat = new Cat('maomao')
console.log(myCat.run())
