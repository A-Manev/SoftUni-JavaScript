function generatesNumbersSequence(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {

        let numbers = result.slice().reverse();
        let currentNumber = numbers
            .slice(0, k)
            .reduce((a, x) => a + x, 0);
        result.push(currentNumber);
    }

    return result;
}

console.log(generatesNumbersSequence(6, 3));
console.log(generatesNumbersSequence(8, 2));

function solve(n, k) {
    let result = [];
    result[0] = 1;

    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k);
        let currentElement = result
            .slice(startIndex, startIndex + k)
            .reduce((a, b) => (a + b), 0);
        result.push(currentElement);
    }

    console.log(result.join(" "));
}