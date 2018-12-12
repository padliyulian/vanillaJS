// call, apply & bind
// function say() {
//     return `${this.name} and ${this.age}`;
// }

// const obj1 = {
//     name: 'julian',
//     age: 30
// }

// const obj2 = {
//     name: 'raisa',
//     age: 5
// }

// const test1 = say.call(obj1);
// const test2 = say.call(obj2);

// console.log(test1);
// console.log(test2);

//////////////////////////////

// const obj = {
//     cash: function (val1, val2) {
//         return this.cash + val1 + val2;
//     }
// }

// const obj1 = {
//     name: 'julian',
//     cash: 300
// }

// const obj2 = {
//     name: 'raisa',
//     cash: 500
// }

// const test1 = obj.cash.apply(obj1, [100, 200]);
// const test2 = obj.cash.apply(obj2, [100, 200]);

// console.log(test1);
// console.log(test2);

/////////////////////////////

const obj = {
    hello: function () {
        return `hello my name is ${this.name}`;
    }
}

const obj1 = {
    name: 'julian',
    cash: 300
}

const obj2 = {
    name: 'raisa',
    cash: 500
}

const test1 = obj.hello.bind(obj1);

console.log(test1());
