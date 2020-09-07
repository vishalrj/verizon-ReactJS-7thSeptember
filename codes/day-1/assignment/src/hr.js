//object destructuring
//const empModule = require('./employee')
/**
 * empModule = {
 * Employee: Employee,
 * test:test
 * }
 */
const { Employee } = require('./employee');
class Hr extends Employee {
    constructor(name, id, basicPay, daPay, hraPay, gratuityPay) {
        super(name, id, basicPay, daPay, hraPay);
        this.gratuityPay = gratuityPay;
    }

    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay;
    }
}
//default exportable member
//export default Hr (React JS)
//const TestAgain = () => console.log('test again')
module.exports = Hr;
// module.exports = {
//     Hr,
//     TestAgain
// }