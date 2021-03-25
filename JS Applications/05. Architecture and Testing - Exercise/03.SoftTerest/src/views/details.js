import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteIdea, getIdeaById } from '../api/data.js';

const detailsTemplate = (idea, isOwner, onDelete) => html`
<div class="container home some">
    <img class="det-img" src=${idea.img} />
    <div class="desc">
        <h2 class="display-5">Dinner Recipe</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    ${isOwner ? html`
    <div class="text-center">
        <a class="btn detb" @click=${onDelete} href="javascript:void(0)">Delete</a>
    </div>` : ''}
</div>`;

export async function detailsPage(ctx) {
    const idea = await getIdeaById(ctx.params.id);

    const isOwner = idea._ownerId == sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(idea, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteIdea(idea._id);
            ctx.page.redirect('/dashboard');
        }
    }
}