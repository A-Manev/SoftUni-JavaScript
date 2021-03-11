import { showDetails } from './details.js'

async function getMovieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const data = await response.json();

    return data;
}

async function editMovie(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const id = formData.get('id');
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    if (title == '' || description == '' || img == '') {
        return alert('All fields are required!');
    }

    const token = sessionStorage.getItem('userToken');

    if (token == null) {
        return alert('You are not authorised!');
    }

    const response = await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' , 'X-Authorization': token},
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

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', editMovie);
}

export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);

    const movie = await getMovieById(id);

    section.querySelector('[name="id"]').value = movie._id;
    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img;
}