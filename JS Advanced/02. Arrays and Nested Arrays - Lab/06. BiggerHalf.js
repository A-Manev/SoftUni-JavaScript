function findBiggerHalf(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);

    if (sortedNumbers.length % 2 == 0) {
        let firstHalf = sortedNumbers.slice(0, sortedNumbers.length / 2);
        let secondHalf = sortedNumbers.reverse().slice(0, sortedNumbers.length / 2);
        return Math.max(...firstHalf) > Math.max(...secondHalf) ? firstHalf : secondHalf.reverse();
    }

    let firstHalf = sortedNumbers.slice(0, sortedNumbers.length / 2 + 1);
    let secondHalf = sortedNumbers.reverse().slice(0, sortedNumbers.length / 2 + 1);
    return Math.max(...firstHalf) > Math.max(...secondHalf) ? firstHalf : secondHalf.reverse();
}

console.log(findBiggerHalf([4, 7, 2, 5]));
console.log(findBiggerHalf([3, 19, 14, 7, 2, 19, 6]));