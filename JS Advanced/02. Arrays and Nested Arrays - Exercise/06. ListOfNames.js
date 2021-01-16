function sortsNames(names) {
    let result = '';

    names.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < names.length; i++) {
        result += `${i + 1}.${names[i]}` + '\n';
    }

    return result;
}

console.log(sortsNames(["John", "Bob", "Christina", "Ema"]));