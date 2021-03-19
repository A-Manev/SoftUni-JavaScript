import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function getOptions() {
    const response = await fetch(url);
    return await response.json();
}

const selectTemplete = (data) => html`
<select id="menu">
    ${data.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>
`;

const options = Object.values(await getOptions());
const main = document.querySelector('div');

update(options);

function update(options) {
    const result = selectTemplete(Object.values(options));
    render(result, main);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();

    const text = document.getElementById('itemText').value;

    if (text == '') {
        return alert('You can\'t add empty field!')
    }

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    event.target.reset();
    
    options.push(await response.json())

    update(options);
}