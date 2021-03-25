import { html } from '../../node_modules/lit-html/lit-html.js';
import { getIdeas } from '../api/data.js';

const dashboardTemplate = (data) => html`
<div id="dashboard-holder">
    ${data ? data.map(cardTemplate) : html`<h1>No ideas yet! Be the first one :)</h1>`}
</div>`;

const cardTemplate = (card) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${card.title}</p>
    </div>
    <img class="card-image" src=${card.img} alt="Card image cap">
    <a class="btn" href=${`/details/${card._id}`}>Details</a>
</div>`;

export async function dashboardPage(ctx) {
    const data = await getIdeas();

    ctx.render(dashboardTemplate(data));
}