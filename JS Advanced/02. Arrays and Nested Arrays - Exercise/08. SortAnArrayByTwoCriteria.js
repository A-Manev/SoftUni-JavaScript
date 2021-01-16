function sortsArrayByTwoCriteria(input) {
    // return input.sort((a, b) => {
    //     if (a.length < b.length) {
    //         return -1;
    //     }
    //     if (a.length > b.length) {
    //         return 1;
    //     }

    //     return a.localeCompare(b);
    // }).join('\n');


    return input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

console.log(sortsArrayByTwoCriteria([
    'alpha',
    'beta',
    'gamma']
));
console.log(sortsArrayByTwoCriteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

));
console.log(sortsArrayByTwoCriteria([
    'test',
    'Deny',
    'omen',
    'Default']
));