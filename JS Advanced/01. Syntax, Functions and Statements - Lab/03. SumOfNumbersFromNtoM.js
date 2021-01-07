function sumAllNumbers(firstInput, secondInput) {
    let sum = 0;
    let startNumber = Number(firstInput);
    let endNumber = Number(secondInput);

    for (i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    console.log(sum);
}

sumAllNumbers('1', '5');