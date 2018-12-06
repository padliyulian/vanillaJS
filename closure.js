// nested function, variable lifetime

// const one = (() => {
//     let counter = 0;

//     const two = () => {
//         return counter += 1;
//     }

//     return two;
// })();

// one(); //counter = 1
// one(); //counter = 2
// console.log(one()); //counter = 3

// const one = () => {
//     let counter = 0;

//     const two = () => counter += 1;

//     return two;
// };

// const two = one();

// two(); //counter = 1
// two(); //counter = 2
// console.log(two()); //counter = 3

function one(outter) {
    return function two(inner) {
        return outter + inner;
    }
}

const two = one(10); //passed outter 10
console.log(two(5)); //passed inner 5
