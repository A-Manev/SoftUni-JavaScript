function extractsIncreasingSubsequenceFromArray(numbers) {
    let result = [];

    result.push(numbers.shift());
    for (const item of numbers) {
        if (result[result.length - 1] <= item) {
            result.push(item);
        }
    }

    return result;
}

console.log(extractsIncreasingSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extractsIncreasingSubsequenceFromArray([
    1,
    2,
    3,
    4]
));
console.log(extractsIncreasingSubsequenceFromArray([
    20,
    3,
    2,
    15,
    6,
    1]
));