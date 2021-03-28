import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';

import { allMemesPage } from './views/allmemes.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

import { logout } from './api/data.js';

//import * as api from './api/data.js';

//window.api = api;

const main = document.querySelector('main');
const nav = document.querySelector('nav');


page('/', decorateContext, guestUserOnly, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);

page('/create', decorateContext, createPage);
page('/all-memes', decorateContext, allMemesPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/profile', decorateContext, profilePage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page.start();

function guestUserOnly(ctx, next) {
    const token = sessionStorage.getItem('authToken');

    if (token) {
        return ctx.page.redirect('/all-memes');
    }

    next();
}

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');

    if (email != null) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${email}`;

        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'list-item');
    }

    // if (userId != null) {
    //     document.getElementById('user').style.display = 'inline-block';
    //     document.getElementById('guest').style.display = 'none';
    // } else {
    //     document.getElementById('user').style.display = 'none';
    //     document.getElementById('guest').style.display = 'inline-block';
    // }

    // document.querySelector('.user').style.display = '';
    // document.querySelector('.guest').style.display = 'none';

    //document.querySelector('.user').style.display = 'none';
    //document.querySelector('.guest').style.display = '';
}