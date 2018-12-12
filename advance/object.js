// object constructor creations with factory , constructor and prototype pattern
////////////////////////////////
// function factoryPerson(name, age, state) {
//     const tmp = {};

//     tmp.name = name;
//     tmp.age = age;
//     tmp.state = state;

//     tmp.printPerson = function () {
//         console.log(`${this.name}, ${this.age}, ${this.state}`);
//     }

//     return tmp;
// }

// const person1 = factoryPerson('julian', 30, 'natar');

// person1.printPerson();

////////////////////////////
// class Person {
//     constructor(name, age, state) {
//         this.name = name;
//         this.age = age;
//         this.state = state;

//         this.printPerson = function () {
//             return console.log(`${this.name}, ${this.age}, ${this.state}`);
//         }
//     }
// }

// let person1 = new Person('julian', 30, 'natar');

// person1.printPerson();

//////////////////////////////

// function Persons(name, age, state) {
//     this.name = name;
//     this.age = age;
//     this.state = state;

//     this.printPerson = function () {
//         return console.log(`${this.name}, ${this.age}, ${this.state}`);
//     }
// }

// let person1 = new Persons('julian', 30, 'natar');

// person1.printPerson();

/////////////////////////////////

let person = function () {}

person.prototype.name = 'name';
person.prototype.age = 1;
person.prototype.state = 'state';
person.prototype.printPerson = function () {
    return console.log(`${this.name}, ${this.age}, ${this.state}`);
}

let person1 = new person();

person1.name = 'julian';
person1.age = 30;
person1.state = 'natar';
person1.printPerson();
