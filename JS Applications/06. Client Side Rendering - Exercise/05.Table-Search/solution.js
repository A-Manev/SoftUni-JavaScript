import { html, render } from '../node_modules/lit-html/lit-html.js';

async function getStudents() {
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   return await response.json();
}

const students = Object.values(await getStudents());

const studentTemplate = (student, select) => html`
<tr class=${select ? 'select' : ''}>
   <td>${student.firstName} ${student.lastName}</td>
   <td>${student.email}</td>
   <td>${student.course}</td>
</tr>`;

const tbody = document.querySelector('tbody');
update();

function update(match = '') {
   const result = students.map(s => studentTemplate(s, compare(s, match)));
   render(result, tbody);
}

document.getElementById('searchBtn').addEventListener('click', search);

function search() {
   const match = document.getElementById('searchField').value;
   update(match);
}

function compare(student, match) {
   return Object.values(student).some(s => s.toLowerCase().includes(match.toLowerCase()) && match);
}