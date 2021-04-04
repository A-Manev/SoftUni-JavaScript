import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchByYear } from '../api/data.js';

const searchTemplate = (onSearch, data, year) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input type="text" name="search" placeholder="Enter desired production year" .value=${year || ''}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${data.length != 0 ? data.map(carTemplate) : html`<p class="no-cars"> No results.</p>`}
    </div>
</section>`;

const carTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function searchPage(ctx) {
    const year = Number(ctx.querystring.split('=')[1]);
    const cars = Number.isNaN(year) ? [] : await searchByYear(year);

    ctx.render(searchTemplate(onSearch, cars, year));

    async function onSearch() {
        const query = Number(document.querySelector('input[type=text]').value);

        ctx.page.redirect(`search?query=${query}`)
    }
}