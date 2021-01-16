function sortsNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    let result = [];
    while (numbers.length != 0) {
        result.push(numbers.shift());
        if (numbers.length != 0) {
            result.push(numbers.pop());
        }
    }

    return result;
}


console.log(sortsNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortsNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]));
