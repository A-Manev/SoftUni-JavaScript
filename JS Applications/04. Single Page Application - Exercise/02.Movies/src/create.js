import { showDetails } from './details.js'

async function createMovie(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    if (title == '' || description == '' || img == '') {
        return alert('All fields are required!');
    }

    const response = await fetch(`http://localhost:3030/data/movies`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' , 'X-Authorization': sessionStorage.getItem('userToken')},
        body: JSON.stringify({ title, description, img }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    event.target.reset();
    const data = await response.json();
    showDetails(data._id);
}

let main;
let section;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', createMovie);
}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}