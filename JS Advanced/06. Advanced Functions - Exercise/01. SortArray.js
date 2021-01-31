function sortArray(numericArray, argument) {
    let map = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    return numericArray.sort(map[argument]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));