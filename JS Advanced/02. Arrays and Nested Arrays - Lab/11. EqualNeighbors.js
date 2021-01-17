function findsNumberOfEqualNeighborPairs(matrix) {
    // let result = 0;

    // let lastValue = '';
    // for (let col = 0; col < matrix[0].length; col++) {
    //     for (let row = 0; row < matrix.length; row++) {
    //         if (lastValue === matrix[row][col]) {
    //             result++;
    //         }

    //         lastValue = matrix[row][col];
    //     }

    //     lastValue = '';
    // }

    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix.length; col++) {
    //         if (lastValue === matrix[row][col]) {
    //             result++;
    //         }

    //         lastValue = matrix[row][col];
    //     }

    //     lastValue = '';
    // }

    // return result;

    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((element, j) => {
            if (element === row[j + 1]) {
                pairs++;
            }

            if (matrix[i + 1] && element === matrix[i + 1][j]) {
                pairs++;
            }
        })
    });

    return pairs;
}

console.log(findsNumberOfEqualNeighborPairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
console.log(findsNumberOfEqualNeighborPairs([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));
console.log(findsNumberOfEqualNeighborPairs([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));