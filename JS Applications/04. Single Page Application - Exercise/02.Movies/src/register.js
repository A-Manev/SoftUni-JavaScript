import { showHome } from './home.js';

async function onRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password != repeatPassword) {
        return alert('Password don\'t match!');
    }

    const response = await fetch(`http://localhost:3030/users/register`, {
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

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', onRegisterSubmit);
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}