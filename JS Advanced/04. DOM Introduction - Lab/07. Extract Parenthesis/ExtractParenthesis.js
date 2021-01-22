function extract(content) {
    let macher = new RegExp(/\((.*?)\)/gm);

    let word = document.getElementById(content).textContent.match(macher);

    return word.join(' ;')
}