function addItem() {
    const input = document.getElementById('newText');
    const liElement = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = "#";
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove();
        //liElement.remove();
    });

    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;

        return element;
    }
}
