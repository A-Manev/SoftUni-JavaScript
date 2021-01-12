function findNumbersOnEvenPositions(numbers) {
    let numbersOnEvenPositions = numbers.filter((x, i) => i % 2 === 0);

   return numbersOnEvenPositions.join(' ');
}

console.log(findNumbersOnEvenPositions(['20', '30', '40']));
console.log(findNumbersOnEvenPositions(['5', '10']));