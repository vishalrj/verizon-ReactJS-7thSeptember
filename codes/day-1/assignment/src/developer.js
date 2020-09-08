const empModule = require('./employee')
/**
 * empModule = {
    Employee: Employee
};
 */
//class Developer extends React.Component{}
class Developer extends empModule.Employee {
    constructor(name, id, basicPay, daPay, hraPay, incentivePay) {
        super(name, id, basicPay, daPay, hraPay);
        this.incentivePay = incentivePay;
    }

    calculateSalary() {
        return super.calculateSalary() + this.incentivePay;
    }
    // render(){
    //     return ??
    // }
}
module.exports = {
    Developer
}