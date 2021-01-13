function printsArrayWithAGivenDelimiter(arrayOfStrings, delimiter) {
    return arrayOfStrings.join(`${delimiter}`);
}

console.log(printsArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(printsArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));