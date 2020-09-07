const { Developer } = require('./developer')
//HrCls is an alias (it's just a variable pointing to the default exportable member of Hr.js file)
//const Hr, { TestAgain } = require('./hr');
const Hr = require('./hr')

const anilHr = new Hr('anil', 1, 1200, 2000, 3000, 4000);
const sunilHr = new Hr('sunil', 2, 1300, 2000, 3000, 4000);
const joydDeveloper = new Developer('joy', 3, 1400, 2000, 3000, 4000);
const rupaDeveloper = new Developer('rupa', 4, 1500, 2000, 3000, 4000);

const employees = [anilHr, joydDeveloper, sunilHr, rupaDeveloper];

for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    console.log(`Salary of 
                ${employee.getName} 
                with id: ${employee.getId}
                is: ${employee.calculateSalary()}`);
}
//console.log(module)

// var personObj = {
//     name: 'anil',
//     age: 34
// };

// const { name } = personObj;
// console.log(name)