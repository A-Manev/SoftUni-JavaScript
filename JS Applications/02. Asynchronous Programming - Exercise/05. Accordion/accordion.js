async function solution() {
    const main = document.getElementById('main');

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const response = await fetch(url);
    const data = await response.json();

    data.forEach(a => {
        const divAccordion = createElement('div', '', ['class', 'accordion']);

        const divHead = createElement('div', '', ['class', 'head']);

        const span = createElement('span', a.title);

        const button = createElement('button', 'More', ['class', 'button', 'id', a._id]);

        button.addEventListener('click', toggle);

        divHead.appendChild(span);
        divHead.appendChild(button);

        const divExtra = createElement('div', '', ['class', 'extra']);
        const p = createElement('p');

        divExtra.appendChild(p);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        main.appendChild(divAccordion);
    });

    async function toggle(event) {
        const accordion = event.target.parentNode.parentNode;
        const id = event.target.id;

        const p = event.target.parentNode.parentNode.children[1].firstChild;
        const extra = event.target.parentNode.parentNode.children[1];

        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        p.textContent = data.content;

        const inHidden = event.target.textContent == 'More';
        extra.style.display = inHidden ? 'block' : 'none';
        event.target.textContent = inHidden ? 'Less' : 'More';
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                element.setAttribute(attributes[i], attributes[i + 1]);
            }
        }

        return element;
    }
}

solution();