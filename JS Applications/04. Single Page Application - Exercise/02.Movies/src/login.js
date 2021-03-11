import { showHome } from './home.js';

async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }

    const response = await fetch(`http://localhost:3030/users/login`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    event.target.reset();
    const data = await response.json();

    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('userEmail', data.email);

    document.getElementById('welcomeMessage').textContent = `Welcome, ${email}`;

    [...document.querySelectorAll('nav .user')].forEach(x => x.style.display = 'block');
    [...document.querySelectorAll('nav .guest')].forEach(x => x.style.display = 'none');

    alert('After pressing OK on this alert you will be redirected to home page, which you should refresh to see the Add Movie Button!');

    showHome();
}

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', onLoginSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}