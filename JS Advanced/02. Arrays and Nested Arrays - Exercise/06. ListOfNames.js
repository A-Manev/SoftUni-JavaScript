function sortsNames(names) {
    // let result = '';

    // names.sort((a, b) => a.localeCompare(b));

    // for (let i = 0; i < names.length; i++) {
    //     result += `${i + 1}.${names[i]}` + '\n';
    // }

    // return result;

    return names
        .sort((a, b) => a.localeCompare(b))
        .map((element, index) => `${++index}.${element}`)
        .join('\n');
}

console.log(sortsNames(["John", "Bob", "Christina", "Ema"]));