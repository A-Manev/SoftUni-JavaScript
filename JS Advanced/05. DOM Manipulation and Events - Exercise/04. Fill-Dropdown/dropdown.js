function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const option = createElement('option', newItemText.value, newItemValue.value)

    document.getElementById('menu').appendChild(option);

    function createElement(type, text, value) {
        const element = document.createElement(type);

        element.value = value;
        element.textContent = text;
        
        return element;
    }

    newItemText.value = '';
    newItemValue.value = '';
}