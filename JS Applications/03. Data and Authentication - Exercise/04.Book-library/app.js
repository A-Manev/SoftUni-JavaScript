function bookLibrary() {
    document.getElementById('loadBooks').addEventListener('click', loadAllBooks);

    document.getElementById('createForm').addEventListener('submit', createBook);

    document.querySelector('table').addEventListener('click', handleTableClick);

    document.getElementById('editForm').addEventListener('submit', updateBook);
}

bookLibrary();

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

async function loadAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(createRow).join('');

    document.querySelector('body > table > tbody').innerHTML = rows;
}

function handleTableClick(event) {
    if (event.target.className == 'deleteBtn') {
        deleteBook(event.target.parentNode.parentNode.id);
    } else if (event.target.className == 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        loadBookForEditting(event.target.parentNode.parentNode.id);
    }
}

function createRow([id, book]) {
    // const tr = createElement('tr', '', ['data-id', id]);

    // const title = createElement('td', book.title);
    // const author = createElement('td', book.author);

    // const td = createElement('td');

    // const editBtn = createElement('button', 'Edit');
    // const deleteBtn = createElement('button', 'Delete');

    // td.appendChild(editBtn);
    // td.appendChild(deleteBtn);

    // tr.appendChild(title);
    // tr.appendChild(author);
    // tr.appendChild(td);

    // editBtn.addEventListener('click', updateBook);
    // deleteBtn.addEventListener('click', deleteBook);

    // //console.log(tr);
    // return tr;
    // //return tr.toString();

    return `<tr id="${id}"><td>${book.title}</td> <td>${book.author}</td> <td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td></tr>`;
}

async function createBook(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title && author) {
        const book = { title: title, author: author };

        event.target.reset();

        await request('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });

        // bonus auto refresh
        await loadAllBooks();
    }
}

async function updateBook(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    const id = formData.get('id');
    const title = formData.get('title');
    const author = formData.get('author');

    if (title && author) {
        const book = { title: title, author: author };

        event.target.reset();

        await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });

        document.getElementById('createForm').style.display = 'block';
        document.getElementById('editForm').style.display = 'none';

        // bonus auto refresh
        await loadAllBooks();
    }
}

async function deleteBook(id) {
    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete',
    });

    // bonus auto refresh
    await loadAllBooks();
}

async function loadBookForEditting(bookId) {
    const book = await request(`http://localhost:3030/jsonstore/collections/books/${bookId}`);

    document.querySelector('#editForm [name="id"]').value = bookId;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
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
