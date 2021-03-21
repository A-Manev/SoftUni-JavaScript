import { html } from '../node_modules/lit-html/lit-html.js';

const rowTemplate = (book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${book._id}>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </td>
</tr>`;

const tableTemplate = context => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${e => onBtnClick(e, context)}>
        ${context.list.map(rowTemplate)}
    </tbody>
</table>`;

const createFormTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

const editFromTemplate = book => html`
<form id="edit-form">
    <input type="hidden" name="_id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>`;

const layoutTemplate = (context, book) => html`
<button @click=${context.load} id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(context)}
${book ? editFromTemplate(book) : createFormTemplate()}`;

function onBtnClick(event, context) {
    if (event.target.classList.contains('editBtn')) {
        const id = event.target.parentNode.dataset.id;
        context.onEdit(id);
    } else if (event.target.classList.contains('deleteBtn')) {
        const id = event.target.parentNode.dataset.id;
        context.onDelete(id);
    }
}

export {
    layoutTemplate,
}