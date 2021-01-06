function calculateSumAndAverageLength(firstString, secondString, thirdString) {
    let sum = firstString.length + secondString.length + thirdString.length;
    let averageSum = Math.floor(sum / 3);

    console.log(sum);
    console.log(averageSum);
}

calculateSumAndAverageLength('chocolate', 'ice cream', 'cake');
calculateSumAndAverageLength('pasta', '5', '22.3');