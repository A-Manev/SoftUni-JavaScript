function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = [...document.querySelectorAll('body > table > tbody > tr')];

      let searchField = document.getElementById('searchField').value.toLocaleLowerCase();

      rows.map(r => r.removeAttribute('class'));

      for (const row of rows) {
         if (row.textContent.toLocaleLowerCase().includes(searchField)) {
            row.classList.add('select');
         }
      }
   }
}