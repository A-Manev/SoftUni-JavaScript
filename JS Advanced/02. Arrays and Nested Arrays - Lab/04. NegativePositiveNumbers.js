function changesNumbersPosition(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            let currentNumber = numbers.splice(i, 1);

            numbers.unshift(currentNumber[0]);
        }
    }

    return numbers.join('\n');
}

console.log(changesNumbersPosition([7, -2, 8, 9]));
console.log(changesNumbersPosition([3, -2, 0, -1]));