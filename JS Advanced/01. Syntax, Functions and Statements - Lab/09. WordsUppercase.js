function makeWordsUppercase(words = '') {
    const regex = /[A-z0-9_]+/g;

    let result = words.match(regex);

    console.log(result.join(', ').toUpperCase());
}

makeWordsUppercase('hello');
makeWordsUppercase('Hi, how are you?');

function solve(input = "") {
    let result = [];
    let pattern = /[A-Za-z0-9_]+/

    while(input.match(pattern)){
        let currentMatch = input.match(pattern);
        result.push(currentMatch.toString().toUpperCase());
        input = input.replace(currentMatch, "");
    }

    console.log(result.join(", "));
}

solve('Hi, how are you?');