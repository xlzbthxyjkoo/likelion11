
//1초마다 num에 10을 더해준다.
const addNum_10 = (num, callback) => {
    setTimeout(() => {
        callback(num + 10);
    }, 1000);
}
//1초마다 num에 20을 더해준다.
const addNum_20 = (num, callback) => {
    setTimeout(() => {
        callback(num + 20);
    }, 1000);
}

//결과 출력
const numLog = (number) =>
    console.log(number);

//최종연산값 출력
const result = () => {
    addNum_10(0, (callbackNum1) => {
        addNum_20(callbackNum1, (callbackNum2) => {
            numLog(callbackNum2);
        });
    });
};

result();
