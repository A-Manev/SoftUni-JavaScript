function checkAreAllNumbersAreEqual(number) {
    let sum = 0;
    let areAllEqual = true;
    let lastNumber = number % 10;

    while (number) {
        sum += number % 10;
        if (lastNumber != number % 10) {
            areAllEqual = false;
        }

        number = Math.floor(number / 10);
    }

    console.log(areAllEqual);
    console.log(sum);
}

checkAreAllNumbersAreEqual(2222222);
checkAreAllNumbersAreEqual(1234);