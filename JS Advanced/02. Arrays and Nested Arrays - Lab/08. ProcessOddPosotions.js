function printElementsOnOddPositions(numbers) {
    return numbers
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}

console.log(printElementsOnOddPositions([10, 15, 20, 25]));
console.log(printElementsOnOddPositions([3, 0, 10, 4, 7, 3]));