import { html } from '../../node_modules/lit-html/lit-html.js';

const Template = () => html``;

export async function editPage(ctx) {
    console.log('edit page', ctx.params.id);
}