function findDiagonalSum(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - i - 1]
    }

    return `${firstDiagonal} ${secondDiagonal}`
}

console.log(findDiagonalSum([
    [20, 40],
    [10, 60]]
));
console.log(findDiagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));