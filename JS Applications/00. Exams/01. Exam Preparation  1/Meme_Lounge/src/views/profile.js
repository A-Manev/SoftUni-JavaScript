import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserMemes } from '../api/data.js';

const profileTemplate = (username, email, gender, data) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${data != undefined && data.length != 0 ? data.map(memeTemplate) : html` <p class="no-memes">No memes in database.</p>`}
    </div>
</section>`;

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href=${`/details/${meme._id}`}>Details </a> </div>`;

export async function profilePage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('email');
    const gender = sessionStorage.getItem('gender');
    const username = sessionStorage.getItem('username');

    const memes = await getUserMemes(userId);

    ctx.render(profileTemplate(username, email, gender, memes));
}