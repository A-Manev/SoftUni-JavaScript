function findGreatestDivisor(firstNumber, secondNumber) {
    let greatestCommonDivisor;
    for (let i = 1; i <= 9; i++) {

        if (firstNumber % i == 0 && secondNumber % i == 0) {
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

findGreatestDivisor(15, 5);
findGreatestDivisor(2154, 458);

function solve(first, second) {
    while(second !== 0){
        let temp = first % second;
        first = second;
        second = temp;
    }

    console.log(first);
}