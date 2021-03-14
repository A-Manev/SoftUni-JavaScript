import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

function getTowns(event) {
    event.preventDefault();

    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ')

    const result = listTemplate(towns);

    render(result, root);
}