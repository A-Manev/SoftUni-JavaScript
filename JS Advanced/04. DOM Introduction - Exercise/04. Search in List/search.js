function search() {
   let searchText = document.getElementById('searchText').value.toLocaleLowerCase();
   let towns = [...document.querySelectorAll('li')];

   let matches = 0;
   for (const town of towns) {
      if (town.textContent.toLocaleLowerCase().includes(searchText)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      } else {
         town.style.textDecoration = '';
         town.style.fontWeight = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}