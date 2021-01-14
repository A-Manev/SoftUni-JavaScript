function rotateArray(arrayOfStrings, numberOfRotations) {
    for (let i = 0; i < numberOfRotations; i++) {
        arrayOfStrings.unshift(arrayOfStrings.pop());
    }

    return arrayOfStrings.join(' ');
}

console.log(rotateArray(['1',
    '2',
    '3',
    '4'],
    2
));

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));