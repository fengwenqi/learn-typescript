// 接口对对象形状进行抽象
interface Person {
    readonly id: number; // 只读属性，创建时被赋值，不能更改
    name: string;
    age?: number // 可选属性，可有可无
}

let human: Person = {
    id: 123,
    name: 'qiqi',
    age: 20
}

// 接口对类的行为进行抽象
interface Radio {
    switchRadio (): void;
}

interface Battery {
    checkBatteryStatus();
}

class Car implements Radio{
    switchRadio(): void {
    }

}

class Cellphone implements Radio, Battery{
    switchRadio(): void {
    }

    checkBatteryStatus() {
    }
}
