//property:
//value property
//functional property

//object literal syntax
var person = {
    firstName:"joydip",
    lastName:'mondal',
    print:function(){
        return this.firstName+' '+this.lastName;
    }
};
console.log(person.print());

//constructor function
function person(firstName, lastName) {
    this.personFirstName = firstName;
    this.personLastName = lastName;
    this.print = function () {
        return this.personFirstName + ' ' + this.personLastName;
    }
}
//__proto__: links this object to the prototype object of the function
var joydipPerson = new person('Joydip', 'Mondal');
var info = joydipPerson.print();
//console.log('using fc: ' + info)
console.log(joydipPerson.__proto__);

var x = 10;
var y = 20;
console.log(window.x);
console.log(window.y);

var jp = new person('a','b');
var anil = new person('anil',null);