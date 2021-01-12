function findTwoSmalllestNumbers(numbers) {
    // let result = [];

    // for (let i = 0; i < 2; i++) {
    //     let smallNumber = Math.min(...numbers);
    //     result.push(smallNumber);
    //     numbers.splice(numbers.indexOf(smallNumber), 1);
    // }

    // return result.join(' ');

    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
}

console.log(findTwoSmalllestNumbers([30, 15, 50, 5]));
console.log(findTwoSmalllestNumbers([3, 0, 10, 4, 7, 3]));