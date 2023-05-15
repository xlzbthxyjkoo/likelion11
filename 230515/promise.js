const addNumber_10 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 10);
        }, 1000);
    })
}

const addNumber_20 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 20);
        }, 1000);
    })
}

const numLog_Promise = (number) =>
    console.log(number);

const result_Promise = () => {
    addNumber_10(0)
        .then((res) =>  addNumber_20(res))
        .then((res) => numLog_Promise(res));
}

result_Promise();