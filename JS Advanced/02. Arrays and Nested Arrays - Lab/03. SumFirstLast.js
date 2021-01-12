function sumFirstAndLastElementsFromArray(numbers) {
    return Number(numbers[0]) + Number(numbers[numbers.length - 1]);
}

console.log(sumFirstAndLastElementsFromArray(['20', '30', '40']));
console.log(sumFirstAndLastElementsFromArray(['5', '10']));