function attachEvents() {
    document.querySelector('.load').addEventListener('click', loadAllCatches);

    const token = sessionStorage.getItem('userToken');
    const userId = sessionStorage.getItem('userId');

    if (token != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';

        document.getElementById('logoutBtn').addEventListener('click', logout);
    }
    else {
        document.getElementById('guest').style.display = 'inline-block';
    }

    if (token != null && userId != null) {
        document.querySelector('.add').disabled = false;
        document.getElementById('addForm').addEventListener('submit', addNewCatche)
    }
}

attachEvents();

async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();
    return data;
}

function createElement(type, content, attributes = []) {
    const element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (attributes.length > 0) {
        for (let i = 0; i < attributes.length; i += 2) {
            element.setAttribute(attributes[i], attributes[i + 1]);
        }
    }

    return element;
}

async function loadAllCatches() {
    const catches = await request('http://localhost:3030/data/catches');

    const allCatches = document.getElementById('catches');

    allCatches.innerHTML = '';

    Object.values(catches).forEach(c => {
        const token = sessionStorage.getItem('userToken');
        const userId = sessionStorage.getItem('userId');

        const divCatch = createElement('div', '', ['class', 'catch']);

        const id = createElement('input', '', ['type', 'hidden', 'name', 'id', 'value', c._id]);

        const labelAngler = createElement('label', 'Angler');
        const inputAngler = createElement('input', '', ['type', 'text', 'class', 'angler', 'value', c.angler,]);

        const labelWeight = createElement('label', 'Weight');
        const inputWeight = createElement('input', '', ['type', 'number', 'class', 'weight', 'value', c.weight,]);

        const labelSpecies = createElement('label', 'Species');
        const inputSpecies = createElement('input', '', ['type', 'text', 'class', 'species', 'value', c.species,]);

        const labelLocation = createElement('label', 'Location');
        const inputLocation = createElement('input', '', ['type', 'text', 'class', 'location', 'value', c.location,]);

        const labelBait = createElement('label', 'Bait');
        const inputBait = createElement('input', '', ['type', 'text', 'class', 'bait', 'value', c.bait,]);

        const labelCaptureTime = createElement('label', 'Capture Time');
        const inputCaptureTime = createElement('input', '', ['type', 'number', 'class', 'captureTime', 'value', c.captureTime,]);

        divCatch.appendChild(id);

        divCatch.appendChild(labelAngler);
        divCatch.appendChild(inputAngler);
        divCatch.appendChild(createElement('hr'));

        divCatch.appendChild(labelWeight);
        divCatch.appendChild(inputWeight);
        divCatch.appendChild(createElement('hr'));

        divCatch.appendChild(labelSpecies);
        divCatch.appendChild(inputSpecies);
        divCatch.appendChild(createElement('hr'));

        divCatch.appendChild(labelLocation);
        divCatch.appendChild(inputLocation);
        divCatch.appendChild(createElement('hr'));

        divCatch.appendChild(labelBait);
        divCatch.appendChild(inputBait);
        divCatch.appendChild(createElement('hr'));

        divCatch.appendChild(labelCaptureTime);
        divCatch.appendChild(inputCaptureTime);
        divCatch.appendChild(createElement('hr'));

        if (token != null && userId != null && c._ownerId == userId) {
            const updateBtn = createElement('button', 'Update', ['class', 'update']);
            const deleteBtn = createElement('button', 'Delete', ['class', 'delete']);

            updateBtn.addEventListener('click', event => updateCatche(event, c._id));
            deleteBtn.addEventListener('click', event => deleteCatche(c._id));

            divCatch.appendChild(updateBtn);
            divCatch.appendChild(deleteBtn);
        }
        else {
            const updateBtn = createElement('button', 'Update', ['disabled', '', 'class', 'update']);
            const deleteBtn = createElement('button', 'Delete', ['disabled', '', 'class', 'delete']);

            divCatch.appendChild(updateBtn);
            divCatch.appendChild(deleteBtn);
        }

        allCatches.appendChild(divCatch);
    });
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
    window.location.pathname = '05.Fisher-Game/index.html';
}

async function addNewCatche(event) {
    event.preventDefault();

    const formdata = new FormData(event.target);

    const angler = formdata.get('angler');
    const weight = Number(formdata.get('weight'));
    const species = formdata.get('species');
    const location = formdata.get('location');
    const bait = formdata.get('bait');
    const captureTime = Number(formdata.get('captureTime'));

    if (angler && Number(weight) && species && location && bait && Number(captureTime)) {
        const token = sessionStorage.getItem('userToken');

        const catche = { angler, weight, species, location, bait, captureTime };
        event.target.reset();

        await request('http://localhost:3030/data/catches', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
            body: JSON.stringify(catche),
        });

        loadAllCatches();
    }
    else {
        return alert('All fields are required!');
    }
}

async function updateCatche(event, id) {
    const token = sessionStorage.getItem('userToken');

    const angler = event.target.parentNode.children[2].value;
    const weight = Number(event.target.parentNode.children[5].value);
    const species = event.target.parentNode.children[8].value;
    const location = event.target.parentNode.children[11].value;
    const bait = event.target.parentNode.children[14].value;
    const captureTime = Number(event.target.parentNode.children[17].value);

    if (angler && Number(weight) && species && location && bait && Number(captureTime)) {
        const catche = { angler, weight, species, location, bait, captureTime };

        await request(`http://localhost:3030/data/catches/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
            body: JSON.stringify(catche),
        });

        loadAllCatches();
    } else {
        return alert('All fields are required!');
    }
}

async function deleteCatche(id) {
    const token = sessionStorage.getItem('userToken');

    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'delete',
        headers: { 'X-Authorization': token },
    });

    loadAllCatches();
}