function findBiggestElement(matrix) {
    // let biggestNumber = Number.MIN_SAFE_INTEGER;

    // for (const row of matrix) {
    //     let currentMaxNumber = Math.max(...row);

    //     if (biggestNumber < currentMaxNumber) {
    //         biggestNumber = currentMaxNumber;
    //     }
    // } 

    // return biggestNumber;

    return matrix
        .map(row => Math.max(...row))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);
}

console.log(findBiggestElement([[20, 50, 10],
[8, 33, 145]]
));
console.log(findBiggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));