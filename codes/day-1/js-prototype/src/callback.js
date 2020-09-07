const x = 10;
//x = 20;
console.log(x)

const numbers = [1, 2, 3, 4];
numbers[0] = 23;
numbers.push(121);
console.log(numbers)
//numbers = [3, 4, 5, 6];

const add = (a, b) => { return (a + b); };
const subtract = (a, b, c) => (a - b - c);

const invoke = (calcFuncRef, ...args) => {
    return calcFuncRef(args[0], args[1], args[2]);
}
let resultAdd = invoke(add, 10, 20);
console.log(`result of add function: ${resultAdd}`)
let resultSubtract = invoke(subtract, 30, 10, 10);
console.log(resultSubtract)

const test = (arg1, arg2 = 0, arg3 = 0) => {
    console.log(arg1 + arg2 + arg3);
}
test(10, 20);

class A {
    constructor() {
        this.some = 0;
    }
    get getSome() {
        return this.some;
    }
    set setSome(val = 0) {
        this.some = val;
    }
    print() { console.log(this.some) }
    static check() {
        console.log('check')
    }
}
A.check();
var aObj = new A();
aObj.setSome = 40;
console.log(aObj.getSome)