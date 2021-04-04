import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';

import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

import { profilePage } from './views/profile.js';

import { logout } from './api/data.js';
import { searchPage } from './views/search.js';


//import * as api from './api/data.js';

//window.api = api;

const main = document.querySelector('main');
const nav = document.querySelector('nav');

page('/', decorateContext, homePage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);

page('/dashboard', decorateContext, dashboardPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);

page('/profile', decorateContext, profilePage);
page('/search', decorateContext, searchPage);



document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const username = sessionStorage.getItem('username');

    if (username != null) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}`;

        document.getElementById('profile').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}