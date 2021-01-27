function deleteByEmail() {
    let customers = [...document.querySelectorAll('#customers > tbody > tr')];
    let inputEmail = document.querySelector('body > label > input[type=text]').value;

    let result = document.getElementById('result');

    let matches = customers.filter(c => c.lastElementChild.textContent === inputEmail);

    if (matches.length) {
        matches.forEach(c => c.remove())
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}