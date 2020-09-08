/*
var contextOject={   
    x:20
    y:20
    (func):function(){}
    ....
}
//variable hoisting
window={
    x:20;
}
*/

console.log(y);
var y = 30;
console.log(y);

var x = 10;
for (var index = 0; index < 2; index++) {
    let x = 20;
    console.log(x) //20 (2)
}
console.log(x) //10/20

class Person {
    constructor(firstName, lastName) {
        this.personFirstName = firstName;
        this.personLastName = lastName;
    }
    print() {
        return this.personFirstName + ' ' + this.personLastName;
    }
}
class Trainee extends Person {
    constructor(firstName, lastName, subjectToLearn) {
        super(firstName, lastName);
        this.subjectToLearn = subjectToLearn;
    }
    print() {
        //var partialInfo = person.prototype.print.apply(this);
        var partialInfo = super.print();
        return partialInfo + ' ' + this.subjectToLearn;
    }
}
class Trainer extends Person {
    constructor(firstName, lastName, subjectToTeach) {
        super(firstName, lastName);
        this.subjectToTeach = subjectToTeach;
    }
    print() {
        //var partialInfo = person.prototype.print.apply(this);
        var partialInfo = super.print();
        return partialInfo + ' ' + this.subjectToTeach;

    }
}


var saliha = new Trainee('saliha', 'Shaik', 'React');
var joydip = new Trainer('joydip', 'mondal', 'React');

console.log(saliha)
console.log(joydip)
console.log(saliha.print());
console.log(joydip.print())