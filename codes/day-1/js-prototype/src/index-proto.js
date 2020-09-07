//constructor function
function person(firstName, lastName) {
    this.personFirstName = firstName;
    this.personLastName = lastName;
    // person.prototype.print = function () {
    //     console.log('hi')
    //     return this.personFirstName + ' ' + this.personLastName;
    // }
}
person.prototype.print = function () {
    return this.personFirstName + ' ' + this.personLastName;
}
/**
Object.prototype.print = function () {
    return this.personFirstName + ' ' + this.personLastName;
}
 */
function trainee(firstName, lastName, subjectToLearn) {
    person.call(this, firstName, lastName);
    this.subjectToLearn = subjectToLearn;
    this.print = function () {
        //var partialInfo = person.prototype.print.apply(this);
        var partialInfo = this.__proto__.print.apply(this);
        return partialInfo + ' ' + this.subjectToLearn;
    }
}

function trainer(firstName, lastName, subjectToTeach) {
    person.call(this, firstName, lastName);
    this.subjectToTeach = subjectToTeach;
    this.print = function () {
        //var partialInfo = person.prototype.print.apply(this);
        var partialCallback = this.__proto__.print.bind(this);
        var partialInfo = partialCallback();
        return partialInfo + ' ' + this.subjectToTeach;
    }
}
//this lines not required if the print is placed inside the prototype object of Object itself
Object.setPrototypeOf(trainee.prototype, person.prototype);
Object.setPrototypeOf(trainer.prototype, person.prototype);

var saliha = new trainee('saliha', 'Shaik', 'React');
var joydip = new trainer('joydip', 'mondal', 'React');

console.log(saliha)
console.log(joydip)
console.log(saliha.print());
console.log(joydip.print())
