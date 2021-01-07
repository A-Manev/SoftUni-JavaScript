function performsDifferentOperations(numbers) {
    const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumOfAllHalvesReducer = (accumulator, currentValue) => accumulator + 1 / currentValue;
    const initialValue  = 0;

    let sum = numbers.reduce(sumReducer);

    let sumOfAllHalves = numbers.reduce(sumOfAllHalvesReducer, initialValue);

    console.log(sum);
    console.log(sumOfAllHalves);
    console.log(numbers.join(''));
}

performsDifferentOperations([1, 2, 3]);
performsDifferentOperations([2, 4, 8, 16]);