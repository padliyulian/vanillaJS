// promise, method chain, nested function
const washedCar = () => {
    return new Promise((resolve, reject) => {
        const isDone = true;

        (isDone) ? resolve('car was done'): reject('car not done');
    });
};

const washedBike = function () {
    return new Promise(function (resolve, reject) {
        const isDone = true;

        if (isDone) {
            resolve('bike was done');
        } else {
            reject('bike not done');
        }
    });
};

const getIce = function () {
    return new Promise(function (resolve, reject) {
        const isDone = true;

        if (isDone) {
            resolve('get ice');
        } else {
            reject('not ice');
        }
    });
};

Promise.all([washedCar(), washedBike(), getIce()])
    .then(function (fromResolve) {
        return console.log(`${fromResolve} all done`);
    })
    .catch(fromReject => console.log(`error : ${fromReject}`));
