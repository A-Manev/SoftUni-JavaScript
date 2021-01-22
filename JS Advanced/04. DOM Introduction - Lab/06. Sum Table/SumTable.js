function sumTable() {
    let elements = [...document.querySelectorAll('table tbody tr')].slice(1, -1);

    let sum = elements.reduce((acc, e) => acc + Number(e.lastChild.textContent), 0);

    document.getElementById('sum').textContent = sum;
}