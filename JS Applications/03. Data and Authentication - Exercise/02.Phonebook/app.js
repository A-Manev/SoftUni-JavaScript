function attachEvents() {
    document.getElementById('btnCreate').addEventListener('click', async () => {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        if (person.value && phone.value) {
            const record = {
                person: person.value,
                phone: phone.value,
            };

            await createNewPhoneRecord(record);

            person.value = '';
            phone.value = '';

            await load();
        }
    });

    document.getElementById('btnLoad').addEventListener('click', load);
}

async function load() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url);
    const data = await response.json();

    const phonebook = document.getElementById('phonebook');

    phonebook.innerHTML = '';
    
    Object.values(data).forEach(p => {
        const li = createElement('li', `${p.person}: ${p.phone}`);
        const deleteBtn = createElement('button', 'Delete', ['id', p._id]);

        li.appendChild(deleteBtn);
        phonebook.appendChild(li);

        deleteBtn.addEventListener('click', deletePhone);
    });
}

async function createNewPhoneRecord(record) {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    });
}

async function deletePhone(event) {
    const url = `http://localhost:3030/jsonstore/phonebook/${event.target.id}`;
    const response = await fetch(url, {
        method: 'delete',
    });

    await load();
}

function createElement(type, content, attributes = []) {
    const element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (attributes.length > 0) {
        element.setAttribute(attributes[0], attributes[1]);
    }

    return element;
}

attachEvents();