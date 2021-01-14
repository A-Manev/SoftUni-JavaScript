function printsEveryNElementFromArray(arrayOfStrings, n) {
    // let result = [];

    // for (let i = 0; i < arrayOfStrings.length; i += n) {
    //     result.push(arrayOfStrings[i]);
    // }

    // return result;

    return arrayOfStrings.filter((value, index) => index % n === 0);
}

console.log(printsEveryNElementFromArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log(printsEveryNElementFromArray([
    'dsa',
    'asd',
    'test',
    'tset'],
    2
));
console.log(printsEveryNElementFromArray([
    '1',
    '2',
    '3',
    '4',
    '5'],
    6
));

