function solve() {
    const form = document.getElementById('container');
    const movies = document.querySelector('#movies > ul');
    const archiveSection = document.getElementById('archive');

    let [name, hall, ticketPrice, onScreenBtn] = Array.from(form.children);

    let [_, ul, clearBtn] = Array.from(archiveSection.children);

    onScreenBtn.addEventListener('click', onScreen);

    clearBtn.addEventListener('click', (e) => {
        const ul = e.target.parentNode.children[1];

        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    });

    function onScreen(event) {
        event.preventDefault();

        if (name.value && hall.value && Number(ticketPrice.value)) {
            let li = createElement('li');

            let span = createElement('span', name.value);

            let hallStrong = createElement('strong', `Hall: ${hall.value}`);

            let div = createElement('div');

            let price = createElement('strong', `${Number(ticketPrice.value).toFixed(2)}`);

            let input = createElement('input', '', ['placeholder', ['Tickets Sold']]);

            let button = createElement('button', 'Archive');

            button.addEventListener('click', archive);

            function archive(event) {
                if (!Number(input.value)) { return };

                let li = createElement('li');
                let calc = Number(price.textContent) * Number(input.value);
                let totalAmount = createElement('strong', `Total amount: ${calc.toFixed(2)}`);
                let buttonDelete = createElement('button', 'Delete');

                li.appendChild(span);
                li.appendChild(totalAmount);
                li.appendChild(buttonDelete);

                ul.appendChild(li);

                event.target.parentNode.parentNode.remove();

                buttonDelete.addEventListener('click', (e) => {
                    e.target.parentNode.remove();
                })
            }

            div.appendChild(price);
            div.appendChild(input);
            div.appendChild(button);

            li.appendChild(span);
            li.appendChild(hallStrong);
            li.appendChild(div);

            movies.appendChild(li);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1]);
        }

        return element;
    }
}