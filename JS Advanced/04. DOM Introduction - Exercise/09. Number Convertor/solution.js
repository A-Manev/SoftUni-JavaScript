function solve() {
    let selectMenu = document.getElementById('selectMenuTo');

    addOptions();

    let convertor = {
        binary: (x) => x.toString(2),
        hexadecimal: (x) => x.toString(16).toUpperCase(),
    };

    document.querySelector('#container > button').addEventListener("click", convert);

    function convert() {
        let inputNumber = document.getElementById('input').value;

        document.getElementById('result').value = convertor[selectMenu.value](Number(inputNumber));
    }

    function addOptions() {
        const binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';

        const hexadecimalOption = document.createElement('option');
        hexadecimalOption.textContent = 'Hexadecimal';
        hexadecimalOption.value = 'hexadecimal';

        selectMenu.add(binaryOption);
        selectMenu.add(hexadecimalOption);
    }
}