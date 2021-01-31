function getFibonator() {
    let firstNumber = 0;
    let secondNumber = 1;

    return function fib() {
        let result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
        return firstNumber;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13