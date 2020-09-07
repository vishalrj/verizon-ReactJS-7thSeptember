class Employee {
    constructor(name, id, basicPay, daPay, hraPay) {
        this.name = name;
        this.id = id;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
    }
    get getName() {
        return this.name;
    }
    get getId() {
        return this.id;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
}
const test = () => { console.log('test') }


// const exportableModuleObj = {
//     employeeCls: Employee
// }
// module.exports = exportableModuleObj;

module.exports = {
    Employee, //Employee:Employee
    test //test:test
};