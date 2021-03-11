import { setupHome, showHome } from './home.js';
import { setupDetails } from './details.js';
import { setupLogin, showLogin } from './login.js';
import { setupRegister, showRegister } from './register.js';
import { setupCreate, showCreate } from './create.js';
import { setupEdit } from './edit.js';

const main = document.querySelector('main');

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate,
};

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation();

showHome();

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNavigation() {
    const email = sessionStorage.getItem('userEmail');

    if (email != null) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${email}`;

        [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'none');

        document.getElementById('createLink').style.display = 'inline';
    } else {
        [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'block');
        document.getElementById('createLink').style.display = 'none';
    }

    document.querySelector('nav').addEventListener('click', (event) => {
        const view = links[event.target.id];
        if (typeof view == 'function') {
            event.preventDefault('');
            view();
        }
    });
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault('');
        showCreate();
    });
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

async function logout() {
    const token = sessionStorage.getItem('userToken');

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token },
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userEmail');

    document.getElementById('createLink').style.display = 'none';

    [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'none');
    [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'block');

    showHome();
}
